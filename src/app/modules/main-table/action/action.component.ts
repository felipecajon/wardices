import { Component, Input, OnInit } from '@angular/core';
import { dice_face_0, dice_face_1, dice_face_2, dice_face_3, dice_face_4, dice_face_5, dice_face_6 } from 'src/app/constants';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
})

export class ActionComponent implements OnInit {
  @Input() actionType!: string;
  isDisabledButton:boolean = false;

  diceFace: Array<string> = [
    dice_face_1,
    dice_face_2,
    dice_face_3,
    dice_face_4,
    dice_face_5,
    dice_face_6
  ];

  hasDice_2: boolean = true;
  hasDice_3: boolean = true;

  dice_1: string = this.diceFace[0];
  dice_2: string = this.diceFace[0];
  dice_3: string = this.diceFace[0];

  constructor() {}

  ngOnInit(): void {}

    getRandomNumber (): number {
    return Math.floor(Math.random() * 6) + 0;
  }

  rollDices () {
    const result_1 = this.getRandomNumber();
    const result_2 = this.getRandomNumber();
    const result_3 = this.getRandomNumber();
    let diceValues = [];

    diceValues.push(this.diceFace[result_1]);
    diceValues.push(this.diceFace[result_2]);
    diceValues.push(this.diceFace[result_3]);

    diceValues.sort();

    if (this.actionType === 'attack') {
      this.dice_1 = diceValues[2];
      this.dice_2 = diceValues[1];
      this.dice_3 = diceValues[0];
    } else {
      this.dice_1 = diceValues[0];
      this.dice_2 = diceValues[1];
      this.dice_3 = diceValues[2];
    }
  }

  handlerRollDices () {
    const _this = this;
    this.isDisabledButton = true;
    let x = 0;

    const intervalID = setInterval(() => {
      _this.rollDices();

      if (++x === 8) {
        _this.isDisabledButton = false;
        window.clearInterval(intervalID);
      }
    }, 100);
  }

  pushAction (action: String) {
    this.handlerRollDices();
  }

  setDices (qty:Number) {
    this.hasDice_2 = qty >= 2;
    this.hasDice_3 = qty >= 3;
  }
}
