import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {

  @Input() color: string;
  @Input() value: string;
  @Input() hasBorder: boolean;
  @Input() borderColor: string;
  @Input() placeholder: string;
  @Input() label: string;
  @Input() labelBackground :string;

  @Output() insertedValue: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.color = this.color ? this.color : "#E8EAED";
    this.hasBorder = this.hasBorder ? this.hasBorder : true;
    this.borderColor = this.borderColor ? this.borderColor : "#E8EAED";
    this.placeholder = this.placeholder ? this.placeholder : "";
    this.label = this.label ? this.label : "";
    this.value = this.value ? this.value : "";
    this.labelBackground = this.labelBackground ? this.labelBackground : "#000";
  }

  valueChange(event) {
    // console.log(event.target.value);
    this.insertedValue.emit(event.target.value);
  }
}
