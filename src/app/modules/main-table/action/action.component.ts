import {Component, Input, OnInit} from '@angular/core';
import {
    dice_face_0,
    dice_face_1,
    dice_face_2,
    dice_face_3,
    dice_face_4,
    dice_face_5,
    dice_face_6
} from 'src/app/constants';
import {MainTableService} from '../main-table.service';

@Component({selector: 'app-action', templateUrl: './action.component.html', styleUrls: ['./action.component.scss']})

export class ActionComponent implements OnInit {
    @Input()actionType !: string;
    isDisabledButton : boolean = false;


    hasDice_2 : boolean = true;
    hasDice_3 : boolean = true;

    dice_1 : string = dice_face_0;
    dice_2 : string = dice_face_0;
    dice_3 : string = dice_face_0;

    status_dice_1 : string = '';
    status_dice_2 : string = '';
    status_dice_3 : string = '';

    diceFace : Array < string > = [
        dice_face_1,
        dice_face_2,
        dice_face_3,
        dice_face_4,
        dice_face_5,
        dice_face_6
    ];

    constructor(private tableService : MainTableService) {}

    ngOnInit(): void {
        this.tableService.resetTable$.subscribe(e => this.resetTable());
        this.tableService.testDices$.subscribe(e => this.testDices(e));
        this.actionType === 'defese' && this.tableService.ableDefese$.subscribe(e => this.ableDefese());
        this.isDisabledButton = this.actionType !== 'attack';
    }

    handlerRollDices(actionType : string) {
        const _this = this;
        let x = 0;
        this.isDisabledButton = true;

        const intervalID = setInterval(() => {
            const lastLoop = ++ x === 8;
            _this.rollDices({last: lastLoop});

            if (lastLoop) {
                window.clearInterval(intervalID);
            }
        }, 100);
    }

    getRandomNumber(): number {
        return Math.floor(Math.random() * 6) + 0;
    }

    rollDices({last} : any) {
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

        const mappedDices = [
            result_1 + 1,
            result_2 + 1,
            result_3 + 1
        ].sort();

        last && this.tableService.testDices({actionType: this.actionType, diceValues: mappedDices});
    }

    setDices(qty : Number) {
        this.hasDice_2 = qty >= 2;
        this.hasDice_3 = qty >= 3;
    }

    testDices(round : any) {
        if (this.actionType === 'attack') {
            this.status_dice_1 = round.attack.resultRound[0].toString();
            this.status_dice_2 = round.attack.resultRound[1].toString();
            this.status_dice_3 = round.attack.resultRound[2].toString();
        }

        if (this.actionType === 'defese') {
            this.status_dice_1 = round.defese.resultRound[2].toString();
            this.status_dice_2 = round.defese.resultRound[1].toString();
            this.status_dice_3 = round.defese.resultRound[0].toString();
        }
    }

    resetTable() {
        this.dice_1 = dice_face_0;
        this.dice_2 = dice_face_0;
        this.dice_3 = dice_face_0;

        this.status_dice_1 = '';
        this.status_dice_2 = '';
        this.status_dice_3 = '';

        this.isDisabledButton = this.actionType !== 'attack';
    }

    ableDefese() {
        this.isDisabledButton = false;
    }
}

