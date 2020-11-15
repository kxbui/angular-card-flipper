import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { debounceTime, filter, tap } from 'rxjs/operators';
import { BoardFacade } from './states/board.facade';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardComponent implements OnInit {
  pair: { idx; id }[];

  pairFull$: Observable<boolean>;
  allMatched$: Observable<boolean>;

  constructor(public bf: BoardFacade, public dialog: MatDialog) {}

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
      filter(allMatched => !!allMatched),
      tap(_ => this.showResultDialog())
    );
  }

  onCardClick(idx, imageId): void {
    this.bf.flipCard({ idx, imageId });
  }

  async showResultDialog(): Promise<void> {
    const { ResultDialogComponent } = await import('../result-dialog/result-dialog.component');
    const dialogRef = this.dialog.open(ResultDialogComponent);

    dialogRef.afterClosed().subscribe(_ => {
      this.startGame();
    });
  }

  startGame(): void {
    this.bf.loadBoardCards(16);
  }
}
