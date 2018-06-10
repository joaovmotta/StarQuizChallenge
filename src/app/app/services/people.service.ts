import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class PeopleService {

  private _linkService = "https://swapi.co/api/";
  private API_KEY = "AIzaSyBhdikMaQ-V7BDr4vgA-q7WrArmP6mtRHM";
  private cx = "009236995095805591070:nevcjfu5piw";

  private googleURL = `https://www.googleapis.com/customsearch/v1?q=princesa+leia&cx=${this.cx}&imgType=face&searchType=image&start=1&fields=items%2Flink&key=${this.API_KEY}`;

  constructor(private http: HttpClient) { }

  findAllPersons(){
    return this.http.get<any>(this._linkService+"people");
  }

  getPicturebyName(list){
    list.forEach(person => {
      this.http.get(this.googleURL).subscribe((response) => {
        person.picture = "";
      })
    });
  }
}
