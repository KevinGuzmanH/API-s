import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {message} from "../../model/message";

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  private URL = "http://localhost:3890/apiprovider"
  constructor(private http: HttpClient) { }

  getPokemons(): Observable<any>{
    let header = new HttpHeaders();
    header.set('Content-Type','application/json')
    return this.http.get(this.URL+ '/pokemonlist/',{headers: header});
  }
  getPokemon(nombrePokemon: string): Observable<any>{
    return this.http.get(this.URL + '/pokemon/'+nombrePokemon)
  }
  getCountries(nombre: string): Observable<any>{
    return this.http.get(this.URL + '/nationalize/' + nombre);
  }
  getOld(nombre: string): Observable<any>{
    return this.http.get(this.URL + '/agify/' + nombre);
  }
  getSearch(palabras: string[]): Observable<any>{
    return this.http.post(this.URL + '/websearch',palabras);
  }
}
