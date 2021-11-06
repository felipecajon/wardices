import { Component, Input, OnInit } from '@angular/core';
import { Dimensions } from '../dimensions.model';
import { IconsService } from '../icons.service';

@Component({
  selector: 'app-dice3',
  templateUrl: './dice3.component.html',
  styleUrls: ['./dice3.component.scss']
})

export class Dice3Component implements OnInit {
  @Input() size: string = '15';
  @Input() classColor!: string;

  width: number = 10;
  height: number = 10;

  constructor(private iconService: IconsService) { }

  ngOnInit(): void {
    const dimensions: Dimensions = this.iconService.setDimensions({size: this.size, width: this.width, height: this.height})
    this.width = dimensions.width;
    this.height = dimensions.height;
  }
}
