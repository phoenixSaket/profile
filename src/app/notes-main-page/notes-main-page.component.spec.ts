import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesMainPageComponent } from './notes-main-page.component';

describe('NotesMainPageComponent', () => {
  let component: NotesMainPageComponent;
  let fixture: ComponentFixture<NotesMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
