import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MuscleGainPageRoutingModule } from './muscle-gain-routing.module';

import { MuscleGainPage } from './muscle-gain.page';
import { WeighlossPage } from '../../Weight/weighloss/weighloss.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    MuscleGainPageRoutingModule, MuscleGainPage
  ],
  declarations: []
})
export class MuscleGainPageModule {}
