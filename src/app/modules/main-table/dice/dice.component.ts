import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})

export class DiceComponent implements OnInit {

  @Input() index! : Number;
  @Input() hasDice! : Boolean;
  @Input() dice_face! : String;
  @Input() status_dice! : String;

  constructor() { }

  ngOnInit(): void {
  }

}
