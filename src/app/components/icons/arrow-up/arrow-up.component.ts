import { Component, Input, OnInit } from '@angular/core';
import { Dimensions } from '../dimensions.model';
import { IconsService } from '../icons.service';

@Component({
  selector: 'app-arrow-up',
  templateUrl: './arrow-up.component.html',
  styleUrls: ['./arrow-up.component.scss']
})

export class ArrowUpComponent implements OnInit {
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
