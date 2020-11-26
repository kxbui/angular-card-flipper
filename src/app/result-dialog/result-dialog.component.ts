import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, NgModule, OnInit } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-result-dialog',
  templateUrl: './result-dialog.component.html',
  styleUrls: ['./result-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [ResultDialogComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule]
})
export class ResultDialogModule {}
