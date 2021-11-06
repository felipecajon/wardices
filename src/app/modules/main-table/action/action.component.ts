import { Component, Input, OnInit } from '@angular/core';
import {
  dice_face_0,
  dice_face_1,
  dice_face_2,
  dice_face_3,
  dice_face_4,
  dice_face_5,
  dice_face_6,
} from 'src/app/constants';
import { MainTableService } from '../main-table.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
})
export class ActionComponent implements OnInit {
  @Input() actionType!: string;

  diceFacesLib: Array<string> = [
    dice_face_0,
    dice_face_1,
    dice_face_2,
    dice_face_3,
    dice_face_4,
    dice_face_5,
    dice_face_6,
  ];

  isDisabledButton: boolean = false;
  dicesFaces: Array<String> = [dice_face_0, dice_face_0, dice_face_0];
  dicesValues: Array<Number> = [0, 0, 0];
  statusDices: Array<Boolean> = [true, true, true];
  qtyDices: Number = 3;
  isReRoll: Boolean = false;
  indexToReRoll: Array<Number> = [];

  constructor(private tableService: MainTableService) {}

  ngOnInit(): void {
    this.tableService.resetTable$.subscribe((e) => this.resetTable());
    this.tableService.testDices$.subscribe((e) => this.testDices(e));
    this.tableService.ableReRoll$.subscribe((e) => this.ableReRoll(e));
  }

  handlerRollDices() {
    const _this = this;
    let x = 0;
    this.isDisabledButton = true;

    const intervalID = setInterval(() => {
      const isLastLoop = ++x === 8;
      _this.rollDices({ isLastLoop });

      if (isLastLoop) {
        window.clearInterval(intervalID);
      }
    }, 100);
  }

  getRandomNumber(): number {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber !== 0 && randomNumber < 7 ? randomNumber : this.getRandomNumber();
  }

  rollDices({ isLastLoop }: any) {
    let dice_1:any = this.dicesValues[0];
    let dice_2:any = this.dicesValues[1];
    let dice_3:any = this.dicesValues[2];

    if (this.isReRoll) {
      this.indexToReRoll.forEach(e => {
        switch (e) {
          case 0:
            dice_1 = this.getRandomNumber();
            break;

          case 1:
            dice_2 = this.getRandomNumber();
            break;

          case 2:
            dice_3 = this.getRandomNumber();
            break;
        };
      });
    } else {
      dice_1 = this.qtyDices === 3 ? this.getRandomNumber() : this.dicesValues[0];
      dice_2 = this.qtyDices >= 2 ? this.getRandomNumber() : this.dicesValues[1];
      dice_3 = this.getRandomNumber();
    }

    this.dicesValues = this.isReRoll ? [dice_1, dice_2, dice_3] : [dice_1, dice_2, dice_3].sort();

    dice_1 = this.dicesValues[0];
    dice_2 = this.dicesValues[1];
    dice_3 = this.dicesValues[2];

    this.dicesFaces = [ this.diceFacesLib[dice_1], this.diceFacesLib[dice_2], this.diceFacesLib[dice_3] ];

    if (isLastLoop) {
      this.tableService.testDices({
        actionType: this.actionType,
        diceValues: this.dicesValues,
        qtyDices: this.qtyDices,
        isReRoll: this.isReRoll
      });
    }
  }

  setDices(qty: Number) {
    this.qtyDices = qty;
  }

  testDices(round: any) {
    if ( this.actionType === 'defese' && round.defese.round ) {
      this.statusDices = round.defese.round;
    }

    if ( this.actionType === 'attack' && round.attack.round ) {
      this.statusDices = round.attack.round;
    }

    this.isDisabledButton = false;
    this.indexToReRoll = [];
    this.isReRoll = false;
  }

  resetTable() {
    this.isDisabledButton = false;
    this.dicesFaces = [dice_face_0, dice_face_0, dice_face_0];
    this.dicesValues = [0, 0, 0];
    this.statusDices = [true, true, true];
  }

  ableDefese() {
    // this.isDisabledButton = false;
  }

  ableReRoll(e: any) {
    this.actionType === 'attack' && this.testingIndexToRoll(e.index);
    this.actionType === 'defese' && this.testingIndexToRoll(e.index);
  }

  testingIndexToRoll (index: Number) {
    let indexToReRoll = this.indexToReRoll;

    if (indexToReRoll.includes(index)) {
      indexToReRoll = indexToReRoll.filter(e => e !== index)
    } else {
      indexToReRoll.push(index);
    }

    this.indexToReRoll = indexToReRoll;

    if (this.indexToReRoll.length >= 1) {
      // this.isDisabledButton = false;
      this.isReRoll = true;
    } else {
      // this.isDisabledButton = true;
      this.isReRoll = false;
    }
  }
}
