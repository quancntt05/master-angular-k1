import { Injectable } from '@angular/core';
import * as $ from 'jquery';
import * as uuid from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loadingId: string = uuid.v4();
  constructor() { }
  start(){
    $('body').append(`<div id = "${this.loadingId}"
    style = "top:0;
    left: 0;
    height:100vh;
    width:100vw;
    position:fixed;
    opacity:0.9;
    background: #FFFFFF;
    z-index: 99999;
    background-image: url(../assets/img/truck.gif);
    background-position:center;
    background-repeat:no-repeat;"
    ></div>`);
  }
  stop(){
    $(`#${this.loadingId}`).remove();
  }
}
