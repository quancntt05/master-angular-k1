import { Injectable } from '@angular/core';
import * as $ from 'jquery';
@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor() { }

  success(message: String) {
    $('body').append(`<div id="abc" class="notify-success">${message}</div>`);
    $('#abc').slideDown();
    setTimeout(() => {
      $('#abc').remove();
    }, 5000);
  }
}
