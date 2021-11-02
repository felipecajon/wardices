import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HamburguerMenuComponent } from './hamburguer-menu/hamburguer-menu.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EmailComponent } from './email/email.component';
import { ArrowLeftComponent } from './arrow-left/arrow-left.component';
import { ArrowRightComponent } from './arrow-right/arrow-right.component';
import { ArrowDownComponent } from './arrow-down/arrow-down.component';
import { ArrowUpComponent } from './arrow-up/arrow-up.component';
import { PlusComponent } from './plus/plus.component';
import { MinusComponent } from './minus/minus.component';
import { BackpackComponent } from './backpack/backpack.component';
import { DicesComponent } from './dices/dices.component';
import { LampComponent } from './lamp/lamp.component';
import { FightComponent } from './fight/fight.component';
import { EqualComponent } from './equal/equal.component';
import { RefreshComponent } from './refresh/refresh.component';
import { CloseComponent } from './close/close.component';

@NgModule({
  declarations: [
    HamburguerMenuComponent,
    CalendarComponent,
    EmailComponent,
    ArrowUpComponent,
    ArrowDownComponent,
    ArrowLeftComponent,
    ArrowRightComponent,
    PlusComponent,
    MinusComponent,
    BackpackComponent,
    DicesComponent,
    LampComponent,
    FightComponent,
    EqualComponent,
    RefreshComponent,
    CloseComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HamburguerMenuComponent,
    CalendarComponent,
    EmailComponent,
    ArrowUpComponent,
    ArrowDownComponent,
    ArrowLeftComponent,
    ArrowRightComponent,
    PlusComponent,
    MinusComponent,
    BackpackComponent,
    DicesComponent,
    LampComponent,
    FightComponent,
    EqualComponent,
    RefreshComponent,
    CloseComponent
  ]
})

export class IconsModule { }
