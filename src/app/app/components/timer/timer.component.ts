import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  private timer;
  private time;

  constructor() { }

  ngOnInit() {
    this.startTimer("00:02:00");
  }

  startTimer(time){
    time = moment.duration(time);
    let seconds = time.asSeconds();
    clearInterval(this.timer);
    this.timer = setInterval(()=>{
      seconds--;
      this.time = this.secondsToTime(seconds);
    },1000);
  }

  stopTimer(){
    clearInterval(this.timer);
  }

  secondsToTime(seconds){
    return moment().startOf('day').seconds(seconds).format("mm:ss");
  }
  
}
