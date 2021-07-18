import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {NewsResponse} from "../../model/marketNewsResponse";



@Injectable({
  providedIn: 'root'
})
export class MarketServiceService {
  URL = 'http://localhost:3891/apiprovider/';

  constructor(private http: HttpClient) { }

  getNews(): Observable<any>{
    return this.http.get(this.URL + 'marketnews');
  }
}
