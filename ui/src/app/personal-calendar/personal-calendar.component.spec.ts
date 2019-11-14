import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DxSchedulerComponent } from 'devextreme-angular';
import { PersonalCalendarComponent } from './personal-calendar.component';
import { PersonService } from '../services/person.service';
import { MockProductService } from '../mock-product-service';

describe('PersonalCalendarComponent', () => {
  let component: PersonalCalendarComponent;
  let fixture: ComponentFixture<PersonalCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalCalendarComponent, DxSchedulerComponent ],
      providers: [
        { provide: PersonService, useClass: MockProductService },
      ],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
