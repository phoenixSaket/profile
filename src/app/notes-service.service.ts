import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as loginData from './data-files/login-data.json';
import * as notes from './data-files/notes.json';

@Injectable({
  providedIn: 'root'
})

export class NotesServiceService {

  private http: HttpClient;
  loginObservable: Observable<any>;
  notes: any;
  loginData: any;
  currentLogin: any;
  currentNotesData: any;
  screenWidth: number = screen.width;
  addNote: boolean;

  // private url: string = "http://localhost:8000";

  constructor(http: HttpClient) {
    this.http = http;
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
    this.notes.default.data.forEach(element => {
      if (this.currentLogin?.userId == element?.userId) {
        this.currentNotesData = element.data;
      }
    });
  }

  getLoginData(email: string, pass: string) {

    let data = null;
    loginData.default.data.forEach(user => {
      if (user.email === email && user.password === pass) {
        data = user;
      }
    });
    return data;
  }


}
