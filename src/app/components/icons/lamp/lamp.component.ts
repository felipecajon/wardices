import { Component, Input, OnInit } from '@angular/core';
import { Dimensions } from '../dimensions.model';
import { IconsService } from '../icons.service';

@Component({
  selector: 'app-lamp',
  templateUrl: './lamp.component.html',
  styleUrls: ['./lamp.component.scss']
})

export class LampComponent implements OnInit {
  @Input() size: string = '30';
  @Input() classColor!: string;
  @Input() classContainer!: string;
  
  width: number = 30;
  height: number = 30;
  
  constructor(private iconService: IconsService) { }
  
  ngOnInit(): void {
    const dimensions: Dimensions = this.iconService.setDimensions({size: this.size, width: this.width, height: this.height})
    this.width = dimensions.width;
    this.height = dimensions.height;
  }
}
