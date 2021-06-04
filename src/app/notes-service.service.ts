import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as loginData from './data-files/login-data.json';
import * as notes from './data-files/notes.json';

@Injectable({
  providedIn: 'root'
})

export class NotesServiceService {

  notes: any;
  loginData: any;
  currentLogin: any;
  currentNotesData: any;
  screenWidth: number = screen.width;
  addNote : boolean;

  constructor(private router : Router) {
    this.notes = notes;
    this.loginData = loginData;
  }

  addtoNotes(data) {
    this.currentNotesData.push(data);
  }

  setCurrentLogin(data) {
    this.currentLogin = data;
  }

  getCurrentNotes() {
    if(this.currentLogin == undefined) {
      this.router.navigate(['./']);
    }

    this.notes.default.data.forEach(element => {
      if(this.currentLogin?.userId == element?.userId){
       this.currentNotesData = element.data; 
      }
    });
  }

}
