import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-select',
  templateUrl: './demo-select.component.html',
  styleUrls: ['./demo-select.component.css']
})
export class DemoSelectComponent implements OnInit {
  items = [{
    id: '1',
    code: 'Giá trị 1'
  },
  {
    id: '2',
    code: 'Giá trị 2'
  },
  {
    id: '3',
    code: 'Giá trị 3'
  }];
  constructor() { }

  ngOnInit() {
  }

}
