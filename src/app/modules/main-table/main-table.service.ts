import {EventEmitter, Injectable} from '@angular/core';


@Injectable({providedIn: 'root'})

export class MainTableService {

    resetTable$ = new EventEmitter<any>();
    testDices$ = new EventEmitter<any>();
    ableDefese$ = new EventEmitter<any>();

    dice_defese_1 : Number = 0;
    dice_defese_2 : Number = 0;
    dice_defese_3 : Number = 0;

    dice_attack_1 : Number = 0;
    dice_attack_2 : Number = 0;
    dice_attack_3 : Number = 0;

    constructor() {}

    testDices({actionType, diceValues} : any) {

        if (actionType === 'attack') {
            this.dice_attack_1 = diceValues[2];
            this.dice_attack_2 = diceValues[1];
            this.dice_attack_3 = diceValues[0];
        } else {
            this.dice_defese_1 = diceValues[2];
            this.dice_defese_2 = diceValues[1];
            this.dice_defese_3 = diceValues[0];
        }

        actionType === 'attack' && this.ableDefese$.emit();

        if (actionType === 'defese') {
            const resultRoundDefese : Array<Boolean>  = [
              this.dice_defese_1 >= this.dice_attack_1,
              this.dice_defese_2 >= this.dice_attack_2,
              this.dice_defese_3 >= this.dice_attack_3,
            ];

            const resultRoundAttack : Array<Boolean>  = [
              this.dice_defese_1 < this.dice_attack_1,
              this.dice_defese_2 < this.dice_attack_2,
              this.dice_defese_3 < this.dice_attack_3,
            ];

            let round = {
                actionType,
                attack: {
                    diceValues: [
                        this.dice_attack_1, this.dice_attack_2, this.dice_attack_3
                    ],
                    resultRound: resultRoundAttack
                },
                defese: {
                    diceValues: [
                        this.dice_defese_1, this.dice_defese_2, this.dice_defese_3
                    ],
                    resultRound: resultRoundDefese
                }
            };

            this.testDices$.emit(round);
        }
    }

    resetTable() {
        this.resetTable$.emit();
    }
}

