import { Component, Input, OnInit } from '@angular/core';
import { MainTableService } from '../main-table.service';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})

export class DiceComponent implements OnInit {

  @Input() index! : Number;
  @Input() hasDice! : Boolean;
  @Input() value! : Number;
  @Input() isDestroyed!: Boolean;
  @Input() actionType!: string;

  isAbleToReRoll: Boolean = false;

  constructor(private tableService: MainTableService) { }

  ngOnInit(): void {
    this.tableService.testDices$.subscribe(e => this.testDices());
    this.tableService.resetTable$.subscribe(e => this.resetTable());
  }

  ableReRoll () {
    this.isAbleToReRoll = !this.isAbleToReRoll;
    const config = {index: this.index, actionType: this.actionType};
    this.tableService.ableReRoll(config);
  }

  testDices() {
    this.resetTable();
  }

  resetTable () {
    if (this.isAbleToReRoll) {
      this.isAbleToReRoll = false;
    }
  }
}
