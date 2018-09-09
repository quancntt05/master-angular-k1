import { Injectable } from '@angular/core';
import * as $ from 'jquery';
import * as uuid from 'uuid';
import * as sw from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  notifyId: string = uuid.v4();

  constructor() {
  }

  alert(message) {
    return new Promise((resolve) => {
      sw.default(
        'The Internet?',
        message,
        'warning'
      ).then((result) => {
        if (result.value) {
          resolve();
        }
      });
    });
  }
  confirm(message) {
    return new Promise((resolve) => {
      sw.default({
        title: 'Are you sure?',
        text: message,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          resolve();
        }
      })
    });
  }
  success(message: string) {
    if ($(`#${this.notifyId}`).length === 0) {
      $('body').append(`<div id="${this.notifyId}" class="notify-success">${message}</div>`);
      $(`#${this.notifyId}`).slideDown();
      setTimeout(() => {
        $(`#${this.notifyId}`).remove();
      }, 5000);
    }
  }
}
