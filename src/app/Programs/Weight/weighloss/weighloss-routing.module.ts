import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeighlossPage } from './weighloss.page';

const routes: Routes = [
  {
    path: '',
    component: WeighlossPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeighlossPageRoutingModule {}
