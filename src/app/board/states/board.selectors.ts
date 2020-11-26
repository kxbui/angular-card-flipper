import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BoardState, CardState } from './board.model';
import * as fromBoard from './board.reducer';

export const selectBoardState = createFeatureSelector<BoardState>(fromBoard.boardFeatureKey);

export const selectCards = createSelector(selectBoardState, (state: BoardState) => state.cards);

export const selectPair = createSelector(selectBoardState, (state: BoardState) => state.pair);

export const selectPairFull = createSelector(selectBoardState, (state: BoardState) => state.pair.length === 2);

export const selectAllMatched = createSelector(selectBoardState, (state: BoardState) =>
  state.cards.every(card => card.state === CardState.Matched)
);

export const selectScores = createSelector(selectBoardState, (state: BoardState) => state.scores);
