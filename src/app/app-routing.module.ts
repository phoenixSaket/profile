import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NoteComponent } from './note/note.component';
import { NotesMainPageComponent } from './notes-main-page/notes-main-page.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'notes', component: NotesMainPageComponent },
  // { path: 'note', component: NoteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
