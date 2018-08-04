import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  x: number;
  y: number;
  constructor() { }

  sum(a:number,b:number){
    return a+b;
  }
}
