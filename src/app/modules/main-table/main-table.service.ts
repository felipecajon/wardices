import { EventEmitter, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MainTableService {
  resetTable$ = new EventEmitter<any>();
  testDices$ = new EventEmitter<any>();
  ableDefese$ = new EventEmitter<any>();
  ableReRoll$ = new EventEmitter<any>();

  dices:any = {defese: {}, attack: {}};
  actionType: string = '';

  constructor() {}

  testDices({ actionType, diceValues, qtyDices, isReRoll }: any) {
    this.dices[actionType].values   = diceValues;
    this.dices[actionType].qtyDices = qtyDices;
    this.actionType = actionType;

    if (this.dices['attack'].values && this.dices['defese'].values) {
      const round = this.testRound();

      this.dices['attack'].round = round.attack;
      this.dices['defese'].round = round.defese;
    }

    this.testDices$.emit(this.dices);
  }

  testRound () {
    let resultRoundDefese: Array<Boolean> = [];
    let resultRoundAttack: Array<Boolean> = [];

    if ( this.dices['defese'].qtyDices === 2 ) {
      resultRoundDefese = [
        false,
        this.dices['defese'].values[1] >= this.dices['attack'].values[1],
        this.dices['defese'].values[2] >= this.dices['attack'].values[2],
      ];

      resultRoundAttack = [
        true,
        this.dices['defese'].values[1] < this.dices['attack'].values[1],
        this.dices['defese'].values[2] < this.dices['attack'].values[2],
      ];
    } else if ( this.dices['defese'].qtyDices === 1 ) {
      resultRoundDefese = [
        false,
        false,
        this.dices['defese'].values[2] >= this.dices['attack'].values[2],
      ];

      resultRoundAttack = [
        true,
        true,
        this.dices['defese'].values[2] < this.dices['attack'].values[2],
      ];
    } else {
      resultRoundDefese = [
        this.dices['defese'].values[0] >= this.dices['attack'].values[0],
        this.dices['defese'].values[1] >= this.dices['attack'].values[1],
        this.dices['defese'].values[2] >= this.dices['attack'].values[2],
      ];

      resultRoundAttack = [
        this.dices['defese'].values[0] < this.dices['attack'].values[0],
        this.dices['defese'].values[1] < this.dices['attack'].values[1],
        this.dices['defese'].values[2] < this.dices['attack'].values[2],
      ];
    }

    return {
      attack: resultRoundAttack,
      defese: resultRoundDefese
    };
  }

  resetTable() {
    this.dices = {defese: {}, attack: {}};
    this.resetTable$.emit();
  }

  ableReRoll({ index, actionType }: any) {
    this.ableReRoll$.emit({index});
  }
}
