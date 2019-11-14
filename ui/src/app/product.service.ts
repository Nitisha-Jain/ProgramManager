import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { ProductInterface } from './product';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private jsonUrl = 'http://localhost:8080';
  public productInfo: ProductInterface[];
  public currentProductChange;
  formfilledData: ProductInterface;
  // for Calendar
  public calenderData: ProductInterface;

  constructor(private http: HttpClient) {
    this.currentProductChange = new BehaviorSubject([]);
  }



  // Adding Product
  addProduct(inputData: ProductInterface): Observable<ProductInterface> {
    return this.http.post<ProductInterface>(this.jsonUrl + '/api/v1/products', inputData).pipe(
      catchError(this.errorHandler)
    );
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }

  // For Updation Data -DialogBox
  sendToFormComponent(inputData: ProductInterface) {
    this.formfilledData = inputData;
    console.log(this.formfilledData);
  }

  // Fetching the Current Product Data
  getProducts() {
    return this.http.get<ProductInterface[]>(this.jsonUrl + '/api/v1/products')
      .subscribe((data) => {
        this.productInfo = data;
        this.currentProductChange.next(this.productInfo);
      });
  }
  getData() {
    return this.currentProductChange;
  }

  // deleting Data
  deleteProductData(productId: string): Observable<{}> {
    // const url = `${this.jsonUrl}/${productId}`;
    return this.http.delete(this.jsonUrl + '/api/v1/products/' + productId)
      .pipe(
        catchError(this.errorHandler),
        tap((data) => {
          let index;
          this.productInfo.map((obj: any, i) => {
            if (obj.id === productId) {
              index = i;
            }
            return obj;
          });
          if (index > -1) {
            this.productInfo.splice(index, 1);
          }
          this.currentProductChange.next(this.productInfo);
        })
      );
  }
  // update
  updateProductData(recievedData: ProductInterface, id: string): Observable<ProductInterface> {
    // const url = `${this.jsonUrl}/${id}`;
    return this.http.put<ProductInterface>(this.jsonUrl + '/api/v1/products/' + id, recievedData).pipe(catchError(this.errorHandler));
  }


}


