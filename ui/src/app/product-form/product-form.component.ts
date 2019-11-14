import { FormControl, FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductInterface } from '../product';
import { MatDialogRef, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.sass']
})
export class ProductFormComponent implements OnInit {

  receivedData: ProductInterface;
   minHour: number;
  public productFormData: ProductInterface[] = [];

  productInformation = this.formBuilder.group({

    productName: ['', [Validators.required, Validators.maxLength(25), Validators.pattern('^[a-zA-Z0-9 ]*')]],
    agenda: this.formBuilder.array([
      this.formBuilder.control('')
    ]),
    durationWeek: ['', [this.weekRangeValidator]],
    durationDays: ['', [this.dayRangeValidator]],
    durationHours: ['', [this.hoursRangeValidator]],
    createdAt: new Date(),
    assignee: ['', [this.assigneeRangeValidator]],
  });


  constructor(private formBuilder: FormBuilder, public productService: ProductService, public dialogRef: MatDialogRef<ProductInterface>) {
  }

  ngOnInit() {
    // For Update Functionality
    this.receivedData = this.productService.formfilledData;
    if (this.receivedData !== undefined) {
      this.productInformation.patchValue({
        productName: this.receivedData.productName,
        durationWeek: this.receivedData.durationWeek,
        durationHours: this.receivedData.durationHours,
        durationDays: this.receivedData.durationDays,
        createdAt: this.receivedData.createdAt,
        // agenda: this.receivedData.agenda,
        assignee: this.receivedData.assignee,
      });
      this.agenda.setValue(this.receivedData.agenda);
      console.log(this.agenda.value);
      // this.productInformation.setControl('agenda', this.setExistingAgenda(this.receivedData.agenda));
    }
  }

  // Custom Validations
  hoursRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {

    const min = 1;
    const maxHours = 24;
    if (control.value !== undefined && (isNaN(control.value) || control.value < min || control.value > maxHours)) {
      return { hoursRange: true };
    }
    return null;
  }
  weekRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const min = 1;
    const maxWeeks = 124;
    if (control.value !== undefined && (isNaN(control.value) || control.value < min || control.value > maxWeeks)) {
      return { weekRange: true };
    }
    return null;
  }
  dayRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const min = 1;
    const maxDays = 7;
    if (control.value !== undefined && (isNaN(control.value) || control.value < min || control.value > maxDays)) {
      return { weekRange: true };
    }
    return null;
  }

  assigneeRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const minAssignee = 1;
    const maxAssignee = 24;
    if (control.value !== undefined && (isNaN(control.value) || control.value < minAssignee || control.value > maxAssignee)) {
      return { weekRange: true };
    }
    return null;
  }

  // For Adding Agenda input
  onEnter() {
    this.add();
  }

  get agenda() {
    return this.productInformation.get('agenda') as FormArray;
  }

  private add() {
    this.agenda.push(this.formBuilder.control(''));
  }

  // Removing input
  remove(i: number) {
    this.agenda.controls.splice(i, 1);
  }


  // On Submission of Form
  onSubmit() {

    const inputData = this.productInformation.value;
    if (this.receivedData === undefined) {
      console.log('if fetched');
      const productData: ProductInterface = inputData;
      this.productService.addProduct(productData)
        .subscribe(data => {
          this.productFormData = this.productService.productInfo,
            this.productFormData.push(data);
        });

      this.Close();
    } else {
      console.log('else called');
      this.productService.updateProductData(inputData, this.receivedData.id)
        .subscribe(updatedData => {
          const ix = updatedData ? this.productService.productInfo.findIndex(h => h.id === updatedData.id) : -1;
          if (ix > -1) {
            this.productFormData[ix] = updatedData;
            this.productService.productInfo[ix] = updatedData;
          }
        });
      console.log(this.receivedData);
      this.Close();
    }
  }

  Close(): void {
    this.dialogRef.close();
  }

}
