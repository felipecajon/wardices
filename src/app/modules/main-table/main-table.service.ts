import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MainTableService {

  constructor() { }

  testDices({attackDices, defeseDices}: any) : void{
    debugger
    console.log(attackDices, defeseDices);
  }

}
