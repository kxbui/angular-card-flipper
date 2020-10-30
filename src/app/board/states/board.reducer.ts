import { Action, createReducer, on } from '@ngrx/store';
import * as BoardActions from './board.actions';

export const boardFeatureKey = 'board';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(BoardActions.loadBoards, state => state),

);

