import { createReducer, on } from '@ngrx/store';
import * as BoardActions from './board.actions';
import { BoardState, CardState } from './board.model';

export const boardFeatureKey = 'board';

export const initialState: BoardState = {
  cards: [],
  pair: []
};

export const reducer = createReducer(
  initialState,

  on(BoardActions.loadBoardCardSuccess, (state, payload) => ({
    ...state,
    cards: payload.cards,
    pair: []
  })),

  on(BoardActions.foundMatch, (state, payload) => ({
    ...state,
    cards: state.cards.map((card, idx) => (payload.idxPair.includes(idx) ? { ...card, state: CardState.Matched } : card)),
    pair: []
  })),

  on(BoardActions.unFlip, (state, payload) => ({
    ...state,
    cards: state.cards.map((card, idx) => (payload.idxPair.includes(idx) ? { ...card, state: CardState.Default } : card)),
    pair: []
  })),

  on(BoardActions.flipCard, (state, { idx, imageId }) => ({
    ...state,
    cards: state.cards.map((card, i) => (i === idx ? { ...card, state: CardState.Flipped } : card)),
    pair: [...state.pair, { idx, imageId }]
  }))
);
