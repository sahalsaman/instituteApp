import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsListViewComponent } from './students-list-view.component';

describe('StudentsListViewComponent', () => {
  let component: StudentsListViewComponent;
  let fixture: ComponentFixture<StudentsListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
