import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductComponent } from './product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatDialogModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MockProductService } from '../mock-product-service';
import { ProductService } from '../product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductInterface } from '../product';
import { Component } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { AvatarModule } from 'ngx-avatar';
import { MatCardModule } from '@angular/material/card';



@Component({
  // tslint:disable-next-line: component-selector
  selector: `host-component`,
  template: `<app-product></app-product>`

})
class TestHostComponent {
  data: ProductInterface = {
    productName: 'Nutrella',
    durationWeek: 23,
    durationDays: 34,
    durationHours: 4,
    createdAt: new Date(),
    assignee: 3,
    agenda: [
      'vxhvchjx',
      'bvhbvjbkj'
    ],
    program: [],
    id: 'ygf'
  };
}



describe('ProductComponent', () => {
  // tslint:disable-next-line: prefer-const
  let testcomponent: TestHostComponent;
  let component: ProductComponent;
  let fixture: ComponentFixture<TestHostComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent, SidenavComponent ,TestHostComponent],
      imports: [
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        AvatarModule,
        FormsModule,
        MatIconModule,
        MatCardModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule],
      providers: [
        // { provide: ProductService, useClass: MockProductService },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testcomponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should fetch data from the service successfully', () => {
    const productService: MockProductService = new MockProductService();
    // tslint:disable-next-line: prefer-const
    let inputData: ProductInterface;
    expect(productService.addProduct(inputData).subscribe((data) => data === {
      productName: 'Nutrella',
      durationWeek: 23,
      durationDays: 34,
      durationHours: 4,
      createdAt: new Date(),
      assignee: 3,
      agenda: [
        'vxhvchjx',
        'bvhbvjbkj'
      ],
      program: [],
      id: 'ygf'
    }));
  });

});
