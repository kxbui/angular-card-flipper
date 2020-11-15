import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import * as BoardSelectors from './board.selectors';

import { concatMap, exhaustMap, map, withLatestFrom } from 'rxjs/operators';

import * as BoardActions from './board.actions';
import { BoardState } from './board.model';
import { BoardService } from './board.service';

@Injectable()
export class BoardEffects {
  loadBoardCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BoardActions.loadBoardCards),
      exhaustMap(({ size }) => this.boardService.loadBoard(size).pipe(map(cards => BoardActions.loadBoardCardSuccess({ cards }))))
    )
  );

  checkPair$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BoardActions.checkPair),
      concatMap(action => of(action).pipe(withLatestFrom(this.store.pipe(select(BoardSelectors.selectPair))))),
      exhaustMap(([action, pair]) =>
        this.boardService
          .checkPair(pair)
          .pipe(map(({ idxPair, foundMatch }) => (foundMatch ? BoardActions.foundMatch({ idxPair }) : BoardActions.unFlip({ idxPair }))))
      )
    )
  );

  constructor(private actions$: Actions, private store: Store<BoardState>, private boardService: BoardService) {}
}
