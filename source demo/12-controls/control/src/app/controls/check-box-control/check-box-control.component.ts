import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import * as uuid from 'uuid';
@Component({
  selector: 'app-check-box-control',
  templateUrl: './check-box-control.component.html',
  styleUrls: ['./check-box-control.component.css']
})
export class CheckBoxControlComponent implements OnInit {
  @Input() label: string;

  _model: boolean;
  @Input() set model(value) {
    this._model = value;
    this.ref.detectChanges();
  };
  @Output() modelChange = new EventEmitter();
  constructor(private ref: ChangeDetectorRef) { }

  id = uuid.v4();

  ngOnInit() {
  }

  input(value) {
    console.log(value);
    this._model = value;
    this.modelChange.emit(this._model);
  }
}
