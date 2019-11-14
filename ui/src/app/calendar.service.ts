import { Injectable, Inject } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HolidayService } from './holiday.service';
import { forkJoin, combineLatest, zip, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { HolidayInterface } from './holiday';
import { Employee } from './product';
import { ProductService } from './product.service';
import { promise } from 'protractor';

@Injectable(
)
export class Service {
    schedulerDataSource: any = {};
    productId: string;
    constructor(private httpClient: HttpClient, private holidayService: HolidayService, private productService: ProductService) {
        this.productId = this.productService.calenderData.id;
        console.log(this.productId);
    }


    getAssignee(): Observable<Employee[]> {
        return this.httpClient.get<Employee[]>('http://localhost:8080/api/v1/assignee');
    }



    getProgram(): any {

        this.schedulerDataSource = new DataSource({
            store: new CustomStore({

                load: () => {
                    console.log('Hello Stackroute');
                    const dataFromAPI$ = this.holidayService.getHolidayData();
                    // tslint:disable-next-line: max-line-length
                    const programData$ = this.httpClient.get('http://localhost:8080/api/v1/products/' + this.productId).toPromise().then(data => {
                        // tslint:disable-next-line: no-string-literal
                        return data['programs'];
                    });


                    dataFromAPI$.subscribe((data) => { console.log('kjhlk', data); });
                    const values$ = forkJoin(
                        dataFromAPI$,
                        programData$
                        // getMultiValueObservable(), forkJoin on works for observables that complete
                    );
                    values$.subscribe((data) => { console.log('null data', data); });

                    const newArray = [];
                    return values$.pipe(
                        map((data) => {
                            console.log('Complete Data', data);
                            data.map((innerData: Array<HolidayInterface>) => {
                                newArray.push(...innerData);
                                console.log(innerData);
                            });
                            console.log('New Array', newArray);
                            return newArray;
                        })
                    ).toPromise();
                },
                insert: (values) => {
                    console.log(values);
                    return this.httpClient.put('http://localhost:8080/api/v1/products/' +
                        this.productId +
                        '/programs',
                        values).toPromise();
                },
                remove: (key) => {

                    return this.httpClient.delete('http://localhost:8080/api/v1/products/' +
                        this.productId +
                        '/programs/' +
                        key.id)
                        .toPromise();
                },
                update: (key, values) => {
                    delete values.settings;

                    return this.httpClient.put('http://localhost:8080/api/v1/products/' +
                        this.productId +
                        '/programs/' +
                        key.id,
                        values

                    )
                        .toPromise();
                },
            }),

            // ...

            paginate: false,

        });
        return this.schedulerDataSource;

    }


}
