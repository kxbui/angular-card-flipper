import { createAction, props } from '@ngrx/store';

export const loadBoard = createAction(
  '[Board] Load Board',
  props<{ size }>()
);

export const loadBoardSuccess = createAction(
  '[Board] Load Board Success',
  props<{ board }>()
);




