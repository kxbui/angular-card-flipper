import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as BoardActions from './board.actions';


@Injectable()
export class BoardEffects {


  // loadBoards$ = createEffect(() => {
  //   return this.actions$.pipe( 

  //     ofType(BoardActions.loadBoards),
  //     /** An EMPTY observable only emits completion. Replace with your own observable API request */
  //     concatMap(() => EMPTY)
  //   );
  // });


  constructor(private actions$: Actions) {}

}
