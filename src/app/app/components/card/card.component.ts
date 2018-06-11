import { Component, OnInit } from '@angular/core';
import { PeopleService } from "../../services/people/people.service";
import { GoogleImageService } from '../../services/google-image/google-image.service';

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
  corrects:any[];  
  previous;
  next;

  
  constructor(private peopleService:PeopleService, private googleService:GoogleImageService ) { }

  ngOnInit() {
    this.findAll(1);
  }

  private findAll(page){
    this.peopleService.findAll(page).subscribe((data) => {
      this.peopleList = data.results;
      this.getPersonsImages();
      this.firstRow = this.peopleList.slice(0,5);
      this.secondRow = this.peopleList.slice(5,10);
      this.previous = data.previous;
      this.next = data.next;
    });
  }

  private getPersonsImages(){
    this.peopleList.forEach((item)=>{
      this.googleService.getPersonImages(item.name).subscribe((data) => {
          item.pic = data.items[0].link;
      });
    });
  }

  private changePage(page){
    this.findAll(page.charAt(page.length - 1));
  }

  teste(){
    return true;
  }
}
