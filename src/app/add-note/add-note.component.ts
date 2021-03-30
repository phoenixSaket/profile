import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from '../notes-service.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  addNote: boolean = false;
  backgroundColor: string;
  textColor: string;
  fontFamily: string;

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
    images: ""
  }

  constructor(private service: NotesServiceService) { }

  ngOnInit(): void {
    this.data= {};
  }

  updateColor(event) {
    this.data.textColor = event.target.value;
  }

  updateBGColor(event) {
    this.data.backgroundColor = event.target.value;
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

  updateContent(event) {
    this.data.content = event.target.value;
  }

  submitData() {
    
    this.data.date = new Date().getDate() + '-' + new Date().getMonth() + '-' + new Date().getFullYear();
    console.log(this.data);
    this.service.addtoNotes(this.data);
    this.data = {};
    this.addNote = false;
  }
}
