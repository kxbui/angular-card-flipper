import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  cards = Array.from(Array(16).keys());

  constructor() { }

  ngOnInit(): void {
  }

}
