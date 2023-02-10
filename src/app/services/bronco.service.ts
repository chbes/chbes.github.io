import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BroncoService {

  public BroncoDistance: number = 2 * 20 + 2 * 40 + 2 * 60;

  constructor() { }

  CaculateSpeed(time: number) {
    return this.BroncoDistance / time;
  }
}
