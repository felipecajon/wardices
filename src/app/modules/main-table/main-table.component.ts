import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss']
})

export class MainTableComponent implements OnInit {
  statusTable: string = '';
  action_01: string = 'defese';
  action_02: string = 'attack';

  constructor() { }

  ngOnInit(): void {
  }

  invertTable () {
    // this.action_01 = this.action_01 === 'attack' ? 'defese' : 'attack';
    // this.action_02 = this.action_01 === 'attack' ? 'defese' : 'attack';
    this.statusTable = this.statusTable === '' ? 'inverted' : '';
  }
}
