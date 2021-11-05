import {EventEmitter, Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})

export class MainTableService {

    resetTable$ = new EventEmitter<any>();
    testDices$ = new EventEmitter<any>();
    ableDefese$ = new EventEmitter<any>();

    dice_defese_1 : Number = 0;
    dice_defese_2 : Number = 0;
    dice_defese_3 : Number = 0;
    qty_dice_defese : Number = 0;

    dice_attack_1 : Number = 0;
    dice_attack_2 : Number = 0;
    dice_attack_3 : Number = 0;
    qty_dice_attack : Number = 0;

    constructor() {}

    testDices({actionType, diceValues, qtyDices} : any) {
        
        if (actionType === 'attack') {
            this.dice_attack_1 = diceValues[0];
            this.dice_attack_2 = diceValues[1];
            this.dice_attack_3 = diceValues[2];
            this.qty_dice_attack = qtyDices;
        } else {
            this.dice_defese_1 = diceValues[0];
            this.dice_defese_2 = diceValues[1];
            this.dice_defese_3 = diceValues[2];
            this.qty_dice_defese = qtyDices;
        }

        actionType === 'attack' && this.ableDefese$.emit();

        if (actionType === 'defese') {
            let resultRoundDefese: Array < Boolean > = [];
            let resultRoundAttack: Array < Boolean > = [];

            if (this.qty_dice_defese === 2) {
                resultRoundDefese = [
                    false,
                    this.dice_defese_2 >= this.dice_attack_2,
                    this.dice_defese_3 >= this.dice_attack_3,
                ];

                resultRoundAttack = [
                    true,
                    this.dice_defese_2 < this.dice_attack_2,
                    this.dice_defese_3 < this.dice_attack_3,
                ];
            } else if (this.qty_dice_defese === 1) {
                resultRoundDefese = [
                    false,
                    false,
                    this.dice_defese_3 >= this.dice_attack_3,
                ];

                resultRoundAttack = [
                    true,
                    true,
                    this.dice_defese_3 < this.dice_attack_3,
                ];
            } else {
                resultRoundDefese = [
                    this.dice_defese_1 >= this.dice_attack_1,
                    this.dice_defese_2 >= this.dice_attack_2,
                    this.dice_defese_3 >= this.dice_attack_3,
                ];

                resultRoundAttack = [
                    this.dice_defese_1 < this.dice_attack_1,
                    this.dice_defese_2 < this.dice_attack_2,
                    this.dice_defese_3 < this.dice_attack_3,
                ];
            }


            let round = {
                actionType,
                attack: {
                    diceValues: [
                        this.dice_attack_1, this.dice_attack_2, this.dice_attack_3
                    ],
                    resultRound: resultRoundAttack,
                    qty_dice: this.qty_dice_attack
                },
                defese: {
                    diceValues: [
                        this.dice_defese_1, this.dice_defese_2, this.dice_defese_3
                    ],
                    resultRound: resultRoundDefese,
                    qty_dice: this.qty_dice_defese
                }
            };

            this.testDices$.emit(round);
        }
    }

    resetTable() {
        this.resetTable$.emit();
    }
}

