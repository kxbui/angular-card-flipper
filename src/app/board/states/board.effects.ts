import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { exhaustMap, map } from 'rxjs/operators';

import * as BoardActions from './board.actions';
import { BoardService } from './board.service';

@Injectable()
export class BoardEffects {
  loadBoards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BoardActions.loadBoard),
      exhaustMap(({ size }) => this.boardService.loadBoard(size).pipe(map(board => BoardActions.loadBoardSuccess({ board }))))
    )
  );

  constructor(private actions$: Actions, private boardService: BoardService) {}
}
