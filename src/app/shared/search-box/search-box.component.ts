import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Input() color: string;
  @Input() value: any;
  @Input() hasBorder: boolean;
  @Input() borderColor: string;
  @Input() placeholder: string;
  @Input() label: any;
  @Input() labelBackground: string;
  @Input() resetValue: boolean;
  @Input() hasButton: boolean;
  @Input() buttonText: string;
  @Input() buttonColor: string;

  @Output() insertedValue: EventEmitter<string> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
    this.color = this.color ? this.color : "#E8EAED";
    this.hasBorder = this.hasBorder ? this.hasBorder : true;
    this.borderColor = this.borderColor ? this.borderColor : "#E8EAED";
    this.placeholder = this.placeholder ? this.placeholder : "";
    this.label = this.label ? this.label : {keyword: "Search by keyword", tag: "Search by tag", color : "Search by color"};
    this.value = this.value ? this.value : {keyword: "", tag: "", color : ""};
    this.labelBackground = this.labelBackground ? this.labelBackground : "#000";
    this.resetValue = this.resetValue ? this.resetValue : false;
    this.hasButton = this.hasButton ? this.hasButton : false;
    this.buttonText = this.buttonText ? this.buttonText : "";
    this.buttonColor = this.buttonColor ? this.buttonColor : "#E8CC6E";
  }

  valueChange(event) {
    console.log(event.target.value)
    this.insertedValue.emit(event.target.value);
    if (this.resetValue) {
      event.target.value = "";
    }
  }
}
