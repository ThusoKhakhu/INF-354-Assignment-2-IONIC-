import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuscleGainPage } from './muscle-gain.page';

const routes: Routes = [
  {
    path: '',
    component: MuscleGainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuscleGainPageRoutingModule {}
