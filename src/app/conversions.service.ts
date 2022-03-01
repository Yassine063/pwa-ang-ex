import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversionsService {

  private pouce: number = 2.54;

  constructor() { }

  cmpouce(value: number) {
    const result: Number = value / this.pouce;
    return result;
  }

  poucecm(value: number) {
    const result: number = value * this.pouce;
    return result;
  }

  celFar(value: number){
    return (value * 9/5) + 32;
  }

  farCel(value: number){
    return (value - 32) * 5/9
  }




}
