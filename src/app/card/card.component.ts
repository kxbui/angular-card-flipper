import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardState } from '../board/states/board.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  @Input()
  imageId: string;

  @Input()
  state: CardState;

  @Output()
  cardClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  cardClicked(): void {
    if (this.state !== CardState.Matched) {
      this.cardClick.emit();
    }
  }
}
