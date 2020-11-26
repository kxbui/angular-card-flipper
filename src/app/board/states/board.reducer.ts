import { createReducer, on } from '@ngrx/store';
import * as BoardActions from './board.actions';
import { BoardState, CardState, MATCHED_SCORE, UNMATCHED_SCORE } from './board.model';

export const boardFeatureKey = 'board';

export const initialState: BoardState = {
  cards: [],
  pair: [],
  scores: 0
};

export const reducer = createReducer(
  initialState,

  on(BoardActions.loadBoardCardSuccess, (state, payload) => ({
    ...state,
    cards: payload.cards,
    pair: [],
    scores: 0
  })),

  on(BoardActions.foundMatch, (state, payload) => ({
    ...state,
    cards: state.cards.map((card, idx) => (payload.idxPair.includes(idx) ? { ...card, state: CardState.Matched } : card)),
    pair: [],
    scores: state.scores + MATCHED_SCORE
  })),

  on(BoardActions.unFlip, (state, payload) => ({
    ...state,
    cards: state.cards.map((card, idx) => (payload.idxPair.includes(idx) ? { ...card, state: CardState.Default } : card)),
    pair: [],
    scores: state.scores + UNMATCHED_SCORE
  })),

  on(BoardActions.flipCard, (state, { idx, imageId }) => ({
    ...state,
    cards: state.pair.length < 2 ? state.cards.map((card, i) => (i === idx ? { ...card, state: CardState.Flipped } : card)) : state.cards,
    pair: [...state.pair, ...(state.pair.length < 2 ? [{ idx, imageId }] : [])]
  }))
);
