import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeighlossPageRoutingModule } from './weighloss-routing.module';

import { WeighlossPage } from './weighloss.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    WeighlossPageRoutingModule, WeighlossPage
  ],
  declarations: [ ]
})
export class WeighlossPageModule {}
