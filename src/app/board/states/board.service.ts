import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor() { }

  loadBoard(size) {
    return of([]);
  }
}
