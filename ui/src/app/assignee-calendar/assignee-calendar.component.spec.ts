import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigneeCalendarComponent } from './assignee-calendar.component';

describe('AssigneeCalendarComponent', () => {
  let component: AssigneeCalendarComponent;
  let fixture: ComponentFixture<AssigneeCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssigneeCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssigneeCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
