import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

export interface CardData {
  imageId: string;
  state: 'default' | 'flipped' | 'matched';
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('cardFlip', [
      state(
        'default',
        style({
          transform: 'none'
        })
      ),
      state(
        'flipped',
        style({
          transform: 'rotateY(180deg)'
        })
      ),
      state(
        'matched',
        style({
          visibility: 'false',
          transform: 'scale(0.05)',
          opacity: 0
        })
      ),
      transition('default => flipped', [animate('400ms')]),
      transition('flipped => default', [animate('400ms')]),
      transition('* => matched', [animate('400ms')])
    ])
  ]
})
export class CardComponent implements OnInit {
  data: CardData = {
    imageId: 'pDGNBK9A0sk',
    state: 'default'
  };
  constructor() { }

  ngOnInit(): void {
  }

  cardClicked(): void {
    if (this.data.state === 'default') {
      this.data.state = 'flipped';
    } else {
      this.data.state = 'default';
    }
  }

}
