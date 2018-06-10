import { Component, OnInit } from '@angular/core';
import { PeopleService } from "../../services/people.service";
import { GoogleImageService } from '../../services/google-image.service';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  peopleList:any[];
  firstRow:any[];
  secondRow:any[];
  pictureList:any[];
  
  constructor( private peopleService:PeopleService, private googleService:GoogleImageService ) { }

  ngOnInit() {
    this.findAllPersons();
  }

  private findAllPersons(){
    this.peopleService.findAllPersons().subscribe((data) => {
      this.peopleList = data.results;
      this.getPersonsImages();
      this.firstRow = this.peopleList.slice(0,5);
      this.secondRow = this.peopleList.slice(5,10);
    });
  }

  private getPersonsImages(){
    this.peopleList.forEach((item)=>{
      this.googleService.getPersonImages(item.name).subscribe((data) =>{
          item.pic = data.items[0].link;
      });
    });
  }
}
