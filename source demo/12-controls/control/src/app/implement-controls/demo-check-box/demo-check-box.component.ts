import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-check-box',
  templateUrl: './demo-check-box.component.html',
  styleUrls: ['./demo-check-box.component.css']
})
export class DemoCheckBoxComponent implements OnInit {
  input1: boolean = true;
  input2: boolean = false;
  input3: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  click(){
    console.log(this.input1);
    console.log(this.input2);
    console.log(this.input3);
  }
}
