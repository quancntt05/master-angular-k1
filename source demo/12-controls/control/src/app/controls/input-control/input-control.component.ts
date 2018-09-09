import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-input-control',
  templateUrl: './input-control.component.html',
  styleUrls: ['./input-control.component.css']
})
export class InputControlComponent implements OnInit {
  @Input() label: string;
  @Input() required: boolean = false;

  _model: any;
  @Input() set model(value) {
    this._model = value;
    this.ref.markForCheck();
  };
  @Output() modelChange = new EventEmitter();
  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
  }

  input(value) {
    this._model = value;
    this.modelChange.emit(this._model);
  }
}
