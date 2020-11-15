import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-result-dialog',
  templateUrl: './result-dialog.component.html',
  styleUrls: ['./result-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultDialogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [ResultDialogComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule]
})
export class ResultDialogModule {}
