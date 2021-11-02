import {Component, OnInit} from '@angular/core';
import {MainTableService} from './main-table.service';

@Component({selector: 'app-main-table', templateUrl: './main-table.component.html', styleUrls: ['./main-table.component.scss']})

export class MainTableComponent implements OnInit {
    statusTable : string = '';
    action_01 : string = 'defese';
    action_02 : string = 'attack';

    constructor(private tableService : MainTableService) {}

    ngOnInit(): void {

    }

    invertTable() {
        this.statusTable = this.statusTable === '' ? 'inverted' : '';
    }

    resetTable() {
        this.tableService.resetTable();
    }
}

