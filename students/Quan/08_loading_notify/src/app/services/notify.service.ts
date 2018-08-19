import { Injectable } from '@angular/core';
import * as $ from 'jquery'
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  notifyId: string = uuid.v4();

  constructor() { }

  success(messenger: string) {
    if ($(`#${this.notifyId}`).length === 0) {
      $('body').append(`<div id="${this.notifyId}" class="notify-success">${messenger}</div>`);
      $(`#${this.notifyId}`).slideDown();
      setTimeout(() => {
        $(`#${this.notifyId}`).remove();
      }, 5000);
    }
  }
}
