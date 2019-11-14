import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DxSchedulerComponent } from 'devextreme-angular';
import { ProductService } from '../product.service';
import { ProductInterface, Employee } from '../product';
import { CalendarComponent } from './calendar.component';
import { MockProductService } from '../mock-product-service';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarComponent, DxSchedulerComponent],
      imports: [ ],
      providers: [
        { provide: ProductService, useClass: MockProductService },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
