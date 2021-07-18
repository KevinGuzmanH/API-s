import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketMRoutingModule } from './market-m-routing.module';
import { AppleComponent } from './component/apple/apple.component';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import { CardModule } from "primeng/card";
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    AppleComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    ToastModule,
    NgxChartsModule,
    MarketMRoutingModule
  ]
})
export class MarketMModule { }
