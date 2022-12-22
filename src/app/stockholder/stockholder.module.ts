import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockholderRoutingModule } from './stockholder-routing.module';
import { StockholderComponent } from './stockholder/stockholder.component';
import { MaterialAllModules } from '../shared/material.module';

@NgModule({
  declarations: [StockholderComponent],
  imports: [CommonModule, StockholderRoutingModule, MaterialAllModules],
})
export class StockholderModule {}
