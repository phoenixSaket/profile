import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormControl } from '@angular/forms';
import { NotesServiceService } from '../notes-service.service';
import { Router } from '@angular/router';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {

  @Input() note: any;
  @Output() cancelNote: EventEmitter<any> = new EventEmitter();

  public Editor = ClassicEditor;

  editor: any = {
    data: "Add your content here !"
  }

  addNote: boolean = false;
  backgroundColor: string;
  textColor: string;
  fontFamily: string;
  colorCtr = new FormControl('');
  selectedFont = 'Cabin';
  tags: any[] = [];
  links: any[] = [];

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
    fontSize: 15,
    links: "",
    tags: [],
    images: []
  }
  linkError: string = "";
  showAdvancedSettings: any;
  bgColor = ["5C2B29", "635D19", "345920", "16504B", "2D555E", "1E3A5F", "42275E", "5B2245", "442F19", "3C3F43"];


  constructor(private service: NotesServiceService, private router: Router) { }

  ngOnInit(): void {
    this.data.title = this.note.title ? this.note.title : "";
    this.data.author = this.note.author ? this.note.author : "";
    this.data.backgroundColor = this.note.backgroundColor ? this.note.backgroundColor : "";
    this.data.content = this.note.content ? this.note.content : "";
    this.data.date = this.note.date ? this.note.date : "";
    this.data.fontFamily = this.note.fontFamily ? this.note.fontFamily : "";
    this.data.fontSize = this.note.fontSize ? this.note.fontSize : "";
    this.data.images = this.note.images ? this.note.images : [];
    this.data.subtitle = this.note.subtitle ? this.note.subtitle : "";
    this.data.tags = this.note.tags ? this.note.tags : [];
    this.data.links = this.note.links ? this.note.links : [];
    this.data.textColor = this.note.textColor ? this.note.textColor : "";
    this.editor.data = this.data.content;
    
  }

  updateColor(event) {
    this.data.textColor = event.target.value;
    this.textColor = event.target.value;
  }

  updateBGColor(event) {
    this.data.backgroundColor = event;
    this.note.backgroundColor = event;
    this.backgroundColor = event;
  }

  toggleAddNote() {
    this.addNote = true;
  }

  updateValueTitle(event) {
    this.data.title = event;
  }

  updateValueSubtitle(event) {
    this.data.subtitle = event;
  }

  updateValueAuthor(event) {
    this.data.author = event.target.value;
  }

  updateContent({ editor }: ChangeEvent) {
    this.editor.data = editor.getData();
  }

  updateFontSize(event) {
    this.data.fontSize = event.target.value;
  }

  addToTags(event) {
    let check = 0;
    this.tags.forEach(element => {
      if (element === event.trim()) {
        check = 1;
      }
    });

    if (check == 0) {
      this.tags.push(event);
    }
  }


  removeFromTags(tag) {
    for (let i = this.tags.indexOf(tag); i < this.tags.length; i++) {
      if (i + 1 === this.tags.length) {
        this.tags.pop();
      } else {
        this.tags[i] = this.tags[i + 1];
      }
    }
  }

  addToLinks(event) {
    let check = 0;
    this.links.forEach(element => {
      if (element === event.target.value.trim()) {
        check = 1;
      }
    });

    let pattern = new RegExp(/(https:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    let res = pattern.test(event.target.value);

    if (check == 0) {
      if (res) {
        this.links.push(event.target.value);
        this.linkError = "";
      } else {
        this.linkError = "Invalid Link";
      }
    }
  }

  removeFromLinks(link) {
    for (let i = this.links.indexOf(link); i < this.links.length; i++) {
      if (i + 1 === this.links.length) {
        this.links.pop();
      } else {
        this.links[i] = this.links[i + 1];
      }
    }
  }

  toggleAdvancedSettings() {
    this.showAdvancedSettings = !this.showAdvancedSettings;
  }

  submitData() {
    this.data.tags = this.tags;
    this.data.links = this.links;
    this.data.content = this.editor.data;
    this.data.fontFamily = this.selectedFont;
    this.data.backgroundColor = this.backgroundColor;
    this.data.textColor = this.textColor;
    this.data.date = new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear();
    this.service.addtoNotes(this.data);
    this.data = {};
    this.addNote = false;
  }

  cancelEdit() {
    this.cancelNote.emit(false);
  }

}
