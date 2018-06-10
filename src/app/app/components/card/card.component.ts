import { Component, OnInit } from '@angular/core';
import { PeopleService } from "../../services/people.service";

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  peopleList:any[];
  firstRow:any[];
  secondRow:any[];
  
  constructor(private peopleService:PeopleService) { }

  ngOnInit() {
    this.peopleService.findAllPersons().subscribe((data) => {
      this.peopleList = data.results;
      this.firstRow = this.peopleList.slice(0,5);

      this.peopleService.getPicturebyName(this.peopleList);

      this.secondRow = this.peopleList.slice(5,10);
    });

  }
}
