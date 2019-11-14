import { Injectable } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HolidayService } from './holiday.service';
import { forkJoin, combineLatest, zip } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { HolidayInterface } from './holiday';


@Injectable({
  providedIn: 'root'
})
export class AssigneeCalendarService {


    schedulerDataSource: any = {};
    constructor(private httpClient: HttpClient, private holidayService: HolidayService) {
    }


    getTasks(): any {
        function isNotEmpty(value) {
            return value !== undefined && value !== null && value !== '';
        }
        this.schedulerDataSource = new DataSource({
            store: new CustomStore({

                load: () => {
                    console.log('Hello Stackroute');
                    const dataFromAPI$ = this.holidayService.getHolidayData();
                    const programData$ = this.httpClient.get('http://localhost:8080/api/v1/sessions');

                    dataFromAPI$.subscribe((data) => {console.log('kjhlk', data); });
                    const values$ = forkJoin(
                        dataFromAPI$,
                        programData$
                        // getMultiValueObservable(), forkJoin on works for observables that complete
                    );

                    const newArray = [];
                    return values$.pipe(
                        map((data) => {
                            console.log('Complete Data', data);
                            data.map((innerData: Array<HolidayInterface>) => {
                                newArray.push(...innerData);
                            });
                            console.log('New Array', newArray);
                            return newArray;
                        })
                    ).toPromise();
        },
            insert: (values) => {

                return this.httpClient.post('http://localhost:8080/api/v1/sessions', values).toPromise();
            },
            remove: (key) => {

                return this.httpClient.delete('http://localhost:8080/api/v1/sessions' + key.id).toPromise();
            },
            update: (values) => {
                delete values.settings;

                return this.httpClient.put('http://localhost:8080/api/v1/sessions', values).toPromise();
            },
            }),

    // ...

    paginate: false,

});
        return this.schedulerDataSource;

    }


  }
