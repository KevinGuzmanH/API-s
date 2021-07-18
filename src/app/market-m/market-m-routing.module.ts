import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppleComponent} from "./component/apple/apple.component";

const routes: Routes = [
  {path: '', children: [
      {path: 'apple', component: AppleComponent},
      {path: '**', redirectTo: 'apple', pathMatch: 'full'}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketMRoutingModule { }
