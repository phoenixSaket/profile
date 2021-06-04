import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material/material.module';
import { NotesMainPageComponent } from './notes-main-page/notes-main-page.component';
import { NoteComponent } from './note/note.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { InputTextComponent } from './shared/input-text/input-text.component';
import { SearchBoxComponent } from './shared/search-box/search-box.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotesMainPageComponent,
    NoteComponent,
    AddNoteComponent,
    EditNoteComponent,
    InputTextComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CKEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
