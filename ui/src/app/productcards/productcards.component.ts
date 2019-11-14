import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductInterface } from '../product';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { ProductFormComponent } from '../product-form/product-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productcards',
  templateUrl: './productcards.component.html',
  styleUrls: ['./productcards.component.sass']
})
export class ProductcardsComponent implements OnInit {
  panelOpenState = false;

  @Input() data;

  // images = ['assets/imgs/images.png', 'assets/imgs/images1.png', 'assets/imgs/program1.png'];
  // randomItem = this.images[Math.floor(Math.random() * this.images.length)];
  productData: ProductInterface;


  constructor(private productService: ProductService, private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
  }

  editData() {

    this.productService.sendToFormComponent(this.data);
    console.log(this.data);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '55%';
    this.dialog.open(ProductFormComponent, dialogConfig);
  }

  deleteData(productData: ProductInterface): void {
    this.productService.deleteProductData(productData.id).subscribe();
  }
  openCalendar(data) {
    this.router.navigateByUrl('/calendar');
    this.productService.calenderData = data;

  }



}
