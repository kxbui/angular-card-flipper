import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Card, CardState } from './board.model';
import { IMAGES } from './image-data';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  constructor() {}

  loadBoard(size): Observable<Card[]> {
    const arr = this.shuffleArray([...IMAGES]).slice(0, size / 2);
    const cards = this.shuffleArray([...arr, ...arr]).map(imageId => ({ imageId, state: CardState.Default }));
    return of(cards);
  }

  checkPair(pair: any[]): Observable<any> {
    return of({ idxPair: pair.map(({ idx }) => idx), foundMatch: this.isMatch(pair[0].imageId, pair[1].imageId) });
  }

  isMatch(imagId1, imagId2): boolean {
    return imagId1 === imagId2;
  }

  shuffleArray(array): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
