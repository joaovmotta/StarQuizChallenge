import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleImageService {
  
  private API_KEY = "AIzaSyCp-xzrZojB5f_wQK4__4p3ltYtJeP94pw";
  private cx = "009236995095805591070:nevcjfu5piw";
  private baseUrl = "https://www.googleapis.com/customsearch/v1?q=";
  private endUrl = `&cx=${this.cx}&imgType=face&searchType=image&fields=items%2Flink&key=${this.API_KEY}`;

  constructor(private http: HttpClient) {}

  getPersonImages(name){
    return this.http.get<any>(this.baseUrl+name+this.endUrl);
  }
}
