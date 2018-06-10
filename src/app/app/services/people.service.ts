import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class PeopleService {

  private _linkService = "https://swapi.co/api/";

  constructor(private http: HttpClient) { }

  findAllPersons(){
    return this.http.get<any>(this._linkService+"people");
  }
}
