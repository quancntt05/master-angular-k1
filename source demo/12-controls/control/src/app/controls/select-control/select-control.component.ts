import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-select-control',
  templateUrl: './select-control.component.html',
  styleUrls: ['./select-control.component.css']
})
export class SelectControlComponent implements OnInit {
  @Input() label: string;
  @Input() required: boolean = false;
  @Input() items: any[] = [];
  @Input() valueField: string = 'id';
  @Input() displayField: string = 'code';

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
