import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockholderComponent } from './stockholder/stockholder.component';

const routes: Routes = [
  { path: 'stockholder', component: StockholderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockholderRoutingModule {}
