import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  userName: '';
  passWord: '';
  disableInput: boolean;
  constructor() { }

  ngOnInit() {
  }
  click1(){
    alert(this.userName + "\r" + this.passWord);
  }

  click2(){
    this.disableInput = !this.disableInput;
  }

}
