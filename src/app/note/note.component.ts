import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() note: any;
  public shortContent: string = "";
  public contentShortened: boolean = false;
  public contentLength: boolean = false;
  public settingsClicked: boolean = false;
  public editing: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.shortenContent();
  }


  shortenContent() {
    let content = this.note.content;
    let words = content.toString().split(' ');

    if (words.length > 30) {
      for (let i = 0; i < 30; i++) {
        this.shortContent = this.shortContent + ' ' + words[i];
      }
      this.contentShortened = true;
      this.contentLength = true;
    } else {
      this.shortContent = this.note.content;
      this.contentShortened = false;
      this.contentLength = false;
    }
  }

  toggleShortContent() {
    this.shortContent = '';
    if (this.contentShortened) {
      this.contentShortened = false;
      this.shortContent = this.note.content;
    } else {
      this.shortenContent();
    }
  }

  settingsClick() {
    this.settingsClicked = !this.settingsClicked;
  }

  editClick() {
    if (!this.editing) {
      this.editing = true;
    }
  }

  deleteClick() {

  }

  cancelEditing($event) {
    this.editing = false;
  }

}
