import { createAction, props } from '@ngrx/store';

export const loadBoardCards = createAction('[Board] Load Board Cards', props<{ size }>());

export const loadBoardCardSuccess = createAction('[Board] Load Board Card Success', props<{ cards }>());

export const flipCard = createAction('[Board] Flip Card', props<{ idx; imageId }>());

export const foundMatch = createAction('[Board] Found Match', props<{ idxPair: number[] }>());

export const unFlip = createAction('[Board] UnFlip', props<{ idxPair: number[] }>());

export const checkPair = createAction('[Board] Check Pair');

export const clearBoard = createAction('[Board] Clear Board');
