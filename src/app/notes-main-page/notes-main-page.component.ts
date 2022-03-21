import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from '../notes-service.service';

@Component({
  selector: 'app-notes-main-page',
  templateUrl: './notes-main-page.component.html',
  styleUrls: ['./notes-main-page.component.css']
})
export class NotesMainPageComponent implements OnInit {

  notesData: any;
  loginData: any;
  backupNotes: any;

  constructor(private service: NotesServiceService) { }

  ngOnInit(): void {

    this.loginData = this.service.currentLogin;
    this.service.getCurrentNotes();
    this.notesData = this.service.currentNotesData;
    this.backupNotes = this.notesData;
  }

  enterSearchDetails(event) {
    let notesToShow = [];
    this.notesData = [];
    let lastAddedNote = null;
    if (event.length > 0) {
      this.backupNotes.forEach(note => {
        note.tags.forEach(tag => {
          if (tag.includes(event)) {
            if(lastAddedNote != note) {
              lastAddedNote = note;
              notesToShow.push(note);
            }
            return;
          }
          return;
        })
      })
      this.notesData = notesToShow;
    } else {
      this.notesData = this.backupNotes;
    }
  }

}
