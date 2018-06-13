import { Component, OnInit } from '@angular/core';
import { PeopleService } from "../../services/people/people.service";
import { GoogleImageService } from '../../services/google-image/google-image.service';
import swal from 'sweetalert2';


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
  points:number = 0;
  time: number = 0;

  constructor(private peopleService:PeopleService, private googleService:GoogleImageService) { }

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
          item.blockConfirm = false;
      });
    });
  }

  private changePage(page){
    this.findAll(page.charAt(page.length - 1));
  }

  private showPersonInfo(person){
    let html = this.generatePersonInfoHTML(person);
    swal({
      title:"Person Info",
      html:html,
      showCloseButton:true,
      confirmButtonText:"OK"
    })
  }

  private generatePersonInfoHTML(person){
    return  `
      <b>Birthday : </b> ${person.birth_year} <br />
      <b>Gender : </b> ${person.gender} <br />
      <b>Mass : </b> ${person.mass} <br />
      <b>Height : </b> ${person.height} <br />
      <b>Hair Color : </b> ${person.hair_color} <br />
      <b>Eye Color : </b> ${person.eye_color} <br />
    `
  }

  private confirmAwnser(person){
    person.blockConfirm = true;
    if(person.name === person.awnser){
      this.points += 10;
    }
  }

  public contador(contagem: string) {
    this.time++;
    console.log(contagem);
  }
}