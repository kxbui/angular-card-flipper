import { animate, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { debounceTime, filter, tap, withLatestFrom } from 'rxjs/operators';
import { BoardFacade } from './states/board.facade';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    // Trigger animation cards array
    trigger('cardAnimation', [
      // Transition from any state to any state
      transition('* => *', [
        // Initially the all cards are not visible
        query(':enter', style({ opacity: 0 }), { optional: true }),

        // Each card will appear sequentially with the delay of 300ms
        query(
          ':enter',
          stagger('100ms', [
            animate(
              '.5s ease-in',
              keyframes([
                style({ opacity: 0, transform: 'translateY(-50%)', offset: 0 }),
                style({ opacity: 0.5, transform: 'translateY(-10px) scale(1.1)', offset: 0.3 }),
                style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
              ])
            )
          ]),
          { optional: true }
        )
      ])
    ])
  ]
})
export class BoardComponent implements OnInit {
  pair: { idx; id }[];

  pairFull$: Observable<boolean>;
  allMatched$: Observable<any>;

  constructor(public bf: BoardFacade, public dialog: MatDialog, private readonly breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.onPairFull();
    this.onAllMatched();
    this.startGame();
  }

  onPairFull(): void {
    this.pairFull$ = this.bf.pairFull$.pipe(
      filter(full => !!full),
      debounceTime(1000),
      tap(_ => this.bf.checkPair())
    );
  }

  onAllMatched(): void {
    this.allMatched$ = this.bf.allMatched$.pipe(
      withLatestFrom(this.bf.scores$),
      filter(([allMatched]) => !!allMatched),
      tap(_ => this.bf.loadBoardCards(0)),
      tap(([_, scores]) => this.showResultDialog(scores))
    );
  }

  onCardClick(idx, imageId): void {
    this.bf.flipCard({ idx, imageId });
  }

  async showResultDialog(scores): Promise<void> {
    const { ResultDialogComponent } = await import('../result-dialog/result-dialog.component');
    const dialogRef = this.dialog.open(ResultDialogComponent, {
      minWidth: this.breakpointObserver.isMatched(Breakpoints.XSmall) ? '95vw' : '30vw',
      data: { scores }
    });

    dialogRef.afterClosed().subscribe(_ => {
      this.startGame();
    });
  }

  startGame(): void {
    this.bf.loadBoardCards(16);
  }
}
