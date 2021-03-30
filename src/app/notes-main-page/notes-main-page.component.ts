import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from '../notes-service.service';

@Component({
  selector: 'app-notes-main-page',
  templateUrl: './notes-main-page.component.html',
  styleUrls: ['./notes-main-page.component.css']
})
export class NotesMainPageComponent implements OnInit {

  notesData: any;
  constructor(private service: NotesServiceService) {}

  ngOnInit(): void {
    this.notesData = this.service.notes.default.data;
  }

}
