import { Injectable } from '@angular/core';
import * as loginData from './data-files/login-data.json';
import * as notes from './data-files/notes.json';

@Injectable({
  providedIn: 'root'
})

export class NotesServiceService {

  notes: any;
  loginData: any;

  constructor() {
    this.notes = notes;
    this.loginData = loginData;
  }

  addtoNotes(data) {
    this.notes.default.data.push(data);
  }

}
