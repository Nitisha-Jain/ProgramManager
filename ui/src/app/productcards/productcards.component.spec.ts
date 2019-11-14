import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatDialogModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MockProductService } from '../mock-product-service';
import { ProductService } from '../product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductInterface } from '../product';
import { Component } from '@angular/core';
import { AvatarModule } from 'ngx-avatar';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductcardsComponent } from './productcards.component';

fdescribe('ProductcardsComponent', () => {
  let component: ProductcardsComponent;
  let fixture: ComponentFixture<ProductcardsComponent>;
  // tslint:disable-next-line: prefer-const
  // tslint:disable-next-line: prefer-const
  let test: ProductInterface;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // tslint:disable-next-line: no-use-before-declare
      declarations: [ProductcardsComponent],
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
        RouterTestingModule,
        RouterModule,
        BrowserAnimationsModule],
      providers: [
        { provide: ProductService, useClass: MockProductService },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should be true', () => {
  //   component.deleteData(test);
  // });

  // it('should fetch data from parent', () => {
  //   const productService: MockProductService = new MockProductService();
  //   // tslint:disable-next-line: prefer-const
  //   let inputData: ProductInterface;
  //   expect(productService.addProduct(inputData).subscribe((data) => data === {
  //     productName: 'Nutrella',
  //     durationWeek: 23,
  //     durationDays: 34,
  //     durationHours: 4,
  //     createdAt: new Date(),
  //     assignee: 3,
  //     agenda: [
  //       'vxhvchjx',
  //       'bvhbvjbkj'
  //     ],
  //     program: [],
  //     id: 'ygf'
  //   }));
  // });
});

// @Component({
//   // tslint:disable-next-line: component-selector
//   selector: `host-component`,
//   template: `<app-productcards></app-productcards>`

// })
// class TestHostComponent {
//   data: ProductInterface = {
//     id: 'vgvhjv',
//     productName: '',
//     createdAt: new Date(),
//     durationWeek: 3,
//     durationDays: 4,
//     durationHours: 5,
//     assignee: 6,
//     agenda: [],
//     program: [],
//   };
// }
