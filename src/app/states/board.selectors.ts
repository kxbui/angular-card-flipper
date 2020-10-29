import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBoard from './board.reducer';

export const selectBoardState = createFeatureSelector<fromBoard.State>(
  fromBoard.boardFeatureKey
);
