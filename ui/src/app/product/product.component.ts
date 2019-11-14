import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductInterface } from '../product';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ProductFormComponent } from '../product-form/product-form.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  productData: ProductInterface[];
  constructor(private dialog: MatDialog, private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts();
    this.getAllData();
  }

  // sortByProperty = (property) => {
  //   return (x, y) => {
  //     return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));
  //   };
  // }

  // Fetching All the details of the  Product
  getAllData(): void {
    // let sortProductData: ProductInterface[];
    this.productService.getData().
      subscribe((data) => {
        // sortProductData = data;
        // sortProductData.sort(this.sortByProperty('createdAt'));
        this.productData = data;
      });
  }


  // Opening Product Form Component
  showDialogBox() {
    this.productService.sendToFormComponent(undefined);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '55%';
    this.dialog.open(ProductFormComponent, dialogConfig);
  }
}
