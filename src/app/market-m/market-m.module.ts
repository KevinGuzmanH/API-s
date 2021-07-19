import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketMRoutingModule } from './market-m-routing.module';
import { AppleComponent } from './component/apple/apple.component';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import { CardModule } from "primeng/card";
import {ToastModule} from 'primeng/toast';
import { GoogleComponent } from './component/google/google.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AmazonComponent } from './component/amazon/amazon.component';
import {DividerModule} from 'primeng/divider';

@NgModule({
  declarations: [
    AppleComponent,
    GoogleComponent,
    NavbarComponent,
    AmazonComponent,
  ],
  imports: [
    CommonModule,
    DividerModule,
    CardModule,
    ToastModule,
    NgxChartsModule,
    MarketMRoutingModule
  ]
})
export class MarketMModule { }
