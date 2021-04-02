import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NotesServiceService } from '../notes-service.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  public Editor = ClassicEditor;

  editor:any = {
    data: "Add your content here !"
  }

  addNote: boolean = false;
  backgroundColor: string = "#1ff0ff";
  textColor: string = "#454448";
  fontFamily: string;
  colorCtr = new FormControl('');
  selectedFont = 'Cabin';

  fontArray: string[] = [
    "Cabin",
    "Inconsolata", 
    "Kiwi Maru",
    "Merriweather", 
    "Nunito",
    "Nunito Sans",
    "Open Sans",
    "Raleway",
    "Roboto",
    "Roboto Slab",
    "Rubik",
    "Source Code Pro",
    "Ubuntu"
  ];

  data: any = {
    title: "",
    subtitle: "",
    content: "",
    date: "",
    author: "",
    textColor: "",
    backgroundColor: "",
    fontFamily: "",
    fontSize: "",
    links: "",
    tags: [],
    images: []
  }

  constructor(private service: NotesServiceService) { }

  ngOnInit(): void {
    this.data = {};
  }

  updateColor(event) {
    this.data.textColor = event.target.value;
    this.textColor = event.target.value;
  }

  updateBGColor(event) {
    this.data.backgroundColor = event.target.value;
    this.backgroundColor = event.target.value;
    console.log(event.target.value);
  }

  toggleAddNote() {
    this.addNote = true;
  }

  updateValueTitle(event) {
    this.data.title = event.target.value;
  }

  updateValueSubtitle(event) {
    this.data.subtitle = event.target.value;
  }

  updateValueAuthor(event) {
    this.data.author = event.target.value;
  }

  updateContent({ editor }: ChangeEvent) {
    this.editor.data = editor.getData();
    // console.log( data );
  }

  updateFontSize(event) {
    this.data.fontSize = event.target.value;
  }

  submitData() {
    
    this.data.content = this.editor.data;
    console.log(this.editor.data);
    this.data.fontFamily = this.selectedFont;
    this.data.backgroundColor = this.backgroundColor;
    this.data.textColor = this.textColor;
    this.data.date = new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear();
    this.service.addtoNotes(this.data);
    this.data = {};
    this.addNote = false;
  }
}
