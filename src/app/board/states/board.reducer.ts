import { createReducer, on } from '@ngrx/store';
import * as BoardActions from './board.actions';

export const boardFeatureKey = 'board';

export interface CardState {
  matched: boolean;
  id: string;
}

export interface BoardState {
  cards: CardState[];

}

export const initialState: BoardState = {
  cards: [] as CardState[]
};


export const reducer = createReducer(
  initialState,

  on(BoardActions.loadBoardSuccess, (state, payload) => ({
    ...state,
    board: payload.board,
  })),

);

