import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { PokemonComponent } from './component/pokemon/pokemon.component';
import { CoinMarketCapComponent } from './component/coin-market-cap/coin-market-cap.component';
import { SidebarCComponent } from './component/sidebar-c/sidebar-c.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { NationalizComponent } from './component/nationaliz/nationaliz.component';
//primeng library
import { SidebarModule } from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {CardModule} from 'primeng/card';
import {KnobModule} from 'primeng/knob';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {AvatarModule} from 'primeng/avatar';
import {DividerModule} from 'primeng/divider';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import { AgifyComponent } from './component/agify/agify.component';
import {MessageService} from "primeng/api";
import { WebSearchComponent } from './component/web-search/web-search.component';
import { WebSearchResultsComponent } from './component/web-search-results/web-search-results.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarCComponent,
    PokemonComponent,
    CoinMarketCapComponent,
    NationalizComponent,
    AgifyComponent,
    WebSearchComponent,
    WebSearchResultsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    SidebarModule,
    ButtonModule,
    BrowserAnimationsModule,
    MenubarModule,
    CardModule,
    KnobModule,
    InputTextModule,
    DividerModule,
    AvatarModule,
    ToastModule,
    AutocompleteLibModule,
    ProgressSpinnerModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
