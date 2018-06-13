import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment'

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  @Input() public input: string;
  @Output() public output: EventEmitter<string> = new EventEmitter<string>();

  private timer;
  private time;

  constructor() { }

  ngOnInit() {
    this.startTimer("00:01:00");
    console.log(this.input);
  }

  startTimer(time){
    time = moment.duration(time);
    let seconds = time.asSeconds();
    clearInterval(this.timer);
    this.timer = setInterval(()=>{
      seconds--;
      if(this.checkEndGame(seconds)){
        this.redirectToEndPage();
      }
      this.time = this.secondsToTime(seconds);
      this.output.emit(this.time);
    },1000);
  }

  checkEndGame(seconds){
    if(seconds == 0){
      this.stopTimer();
      return false;
    }
    return true;
  }

  redirectToEndPage(){

  }

  stopTimer(){
    clearInterval(this.timer);
  }

  secondsToTime(seconds){
    return moment().startOf('day').seconds(seconds).format("mm:ss");
  }
  
}
