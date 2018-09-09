import { Component, OnInit, ViewChild, ElementRef, Input, EventEmitter, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
//import * as $ from 'jquery';
// 'jquery-datetimepicker'
// Document: https://xdsoft.net/jqplugins/datetimepicker/
declare var $: any;
@Component({
	selector: 'date-time-picker-control',
	templateUrl: './date-time-picker.control.html',
	styleUrls: ['./date-time-picker.control.css']
})
export class DateTimePickerControl implements OnInit {
	@Input() type: 'datetime' | 'date' | 'time' = 'datetime';
	@Input() size: 'sm' | 'xs' = 'sm';
	@Input() disabled: boolean = false;
	@Input() label: string;
	@Output() change = new EventEmitter();
	date: string;

	@Input()
	set model(val) {
		setTimeout(() => {
			if (!val) {
				if (val !== null) this.modelChange.emit(null);
				else {
					this.date = null;
				}
			} else if (!(val instanceof Date)) {
				let date = new Date(val);
				this.modelChange.emit(date);
			} else {
				if (this.type === 'datetime') {
					this.date = this.datePipe.transform(val, 'yyyy/MM/dd HH:mm');
				} else if (this.type === 'date') {
					this.date = this.datePipe.transform(val, 'yyyy/MM/dd');
				} else {
					this.date = this.datePipe.transform(val, 'HH:mm');
				}
			}
		}, 0);
	}
	@Output() modelChange = new EventEmitter();

	@ViewChild('control') control: ElementRef;
	constructor(private datePipe: DatePipe) {
	}

	ngOnInit() {
	}

	ngAfterViewInit() {
		$(this.control.nativeElement).datetimepicker({
			datepicker: this.type === 'datetime' || this.type === 'date',
			timepicker: this.type === 'datetime' || this.type === 'time',
			format: this.type === 'datetime' ? 'Y/m/d H:i' : (this.type === 'date' ? 'Y/m/d' : 'H:i'),
			step: 15,
			onChangeDateTime: (date) => {
				if (date) {
					this.modelChange.emit(date);
				} else {
					this.modelChange.emit(null);
				}
				this.change.emit(date);
			}
		});
	}
}