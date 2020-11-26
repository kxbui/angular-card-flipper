import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as BoardActions from './board.actions';
import { BoardState } from './board.model';
import * as BoardSelectors from './board.selectors';

@Injectable({
  providedIn: 'root'
})
export class BoardFacade {
  cards$ = this.store.pipe(select(BoardSelectors.selectCards));

  pairFull$ = this.store.pipe(select(BoardSelectors.selectPairFull));

  allMatched$ = this.store.pipe(select(BoardSelectors.selectAllMatched));

  scores$ = this.store.pipe(select(BoardSelectors.selectScores));

  constructor(private store: Store<BoardState>) {}

  loadBoardCards(size): void {
    this.store.dispatch(BoardActions.loadBoardCards({ size }));
  }

  flipCard(payload): void {
    this.store.dispatch(BoardActions.flipCard(payload));
  }

  checkPair(): void {
    this.store.dispatch(BoardActions.checkPair());
  }
}
