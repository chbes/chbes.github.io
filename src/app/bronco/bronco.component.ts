import { Component } from '@angular/core';

@Component({
  selector: 'app-bronco',
  templateUrl: './bronco.component.html',
  styleUrls: ['./bronco.component.scss']
})
export class BroncoComponent {
  public broncoRoundDistance: number = 2 * 20 + 2 * 40 + 2 * 60;
  public broncoNbRound = 5;
  public broncoDistance: number = this.broncoRoundDistance * this.broncoNbRound;

  public minute: number = 0;
  public second: number = 0;

  public duration: number = 0;
  public speed: number = 0;
  public averageRoundDuration = 0;

  public updateMinute(event: any) {
    if (event.target.value <= 0) {
      this.minute = 0;
    } else {
      this.minute = Number(event.target.value);
    }
    console.log('m',this.minute)
    console.log('s',this.second)
    this.calculate();
  }
  
  public updateSecond(event: any) {
    if (event.target.value <= 0) {
      this.second = 0;
    } else {
      this.second = Number(event.target.value);
    }
    console.log('-m',this.minute)
    console.log('-s',this.second)
    this.calculate();
  }

  public calculate() {
    this.duration = (this.minute * 60) + this.second;
    this.averageRoundDuration = this.duration / this.broncoNbRound;
    this.speed = this.broncoDistance / this.duration;
  }
}
