import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  firstName: string;
  disableInput: boolean;
  constructor() { }

  ngOnInit() {
  }
  click1(){
    this.firstName+= "AAA";
    //alert(this.firstName);
  }

  click2(){
    this.disableInput = !this.disableInput;
  }
}