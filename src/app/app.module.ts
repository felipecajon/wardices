import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainTableComponent } from './modules/main-table/main-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActionComponent } from './modules/main-table/action/action.component';
import { IconsModule } from './components/icons/icons.module';
import { DiceComponent } from './modules/main-table/dice/dice.component';

@NgModule({
  declarations: [
    AppComponent,
    MainTableComponent,
    ActionComponent,
    DiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
