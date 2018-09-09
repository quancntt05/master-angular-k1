import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-input',
  templateUrl: './demo-input.component.html',
  styleUrls: ['./demo-input.component.css']
})
export class DemoInputComponent implements OnInit {
  input1: string = 'Super';
  input2: string = 'Dev';
  input3: string = 'Peter';
  constructor() { }

  ngOnInit() {
  }
  click(){
    console.log(this.input1);
    console.log(this.input2);
    console.log(this.input3);
  }
}
