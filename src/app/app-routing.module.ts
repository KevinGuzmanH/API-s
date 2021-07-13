import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {PokemonComponent} from "./component/pokemon/pokemon.component";
import {CoinMarketCapComponent} from "./component/coin-market-cap/coin-market-cap.component";
import {NationalizComponent} from "./component/nationaliz/nationaliz.component";
import {AgifyComponent} from "./component/agify/agify.component";
import {WebSearchComponent} from "./component/web-search/web-search.component";
import {WebSearchResultsComponent} from "./component/web-search-results/web-search-results.component";

const routes: Routes = [
  {path: 'inicio', component: HomeComponent},
  {path: 'api/pokemon', component: PokemonComponent},
  {path: 'api/coinMarketCap', component: CoinMarketCapComponent},
  {path: 'api/nationaliz', component: NationalizComponent},
  {path: 'api/agify', component: AgifyComponent},
  {path: 'api/websearch', component: WebSearchComponent},
  {path: 'api/websearch/results', component: WebSearchResultsComponent},
  {path: '**',redirectTo: 'inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
