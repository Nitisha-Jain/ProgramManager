import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatDialogModule, MatDialogRef, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MockProductService } from '../mock-product-service';
import { ProductFormComponent } from './product-form.component';
import { ProductService } from '../product.service';

fdescribe('ProductFormComponent', () => {
  let component: ProductFormComponent;
  let fixture: ComponentFixture<ProductFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductFormComponent],
      imports: [
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        FormsModule,
        MatIconModule,
        ReactiveFormsModule,
        BrowserAnimationsModule],
      providers: [
        { provide: ProductService, useClass: MockProductService },
        { provide: MatDialogRef, useValue: {} },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('productName should be valid', async(() => {
    component.productInformation.controls.productName.setValue('');
    expect(component.productInformation.valid).toBeFalsy();
  }));

  it('durationWeek should be valid', async(() => {
    component.productInformation.controls.durationWeek.setValue('');
    expect(component.productInformation.valid).toBeFalsy();
  }));

  it('duration Days should be valid', async(() => {
    component.productInformation.controls.durationDays.setValue('');
    expect(component.productInformation.valid).toBeFalsy();
  }));
  it('duration Hours should be valid', async(() => {
    component.productInformation.controls.durationHours.setValue('');
    expect(component.productInformation.valid).toBeFalsy();
  }));
  it('Assignee should be valid', async(() => {
    component.productInformation.controls.assignee.setValue('');
    expect(component.productInformation.valid).toBeFalsy();
  }));

  it('should be min hr', () => {
    component.minHour = 1;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.innerHTML).toContain(1);
  });

});
