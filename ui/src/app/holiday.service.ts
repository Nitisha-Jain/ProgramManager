import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HolidayInterface } from './holiday';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HolidayService {
  database: any = [];
  response: any = [];
  date: [];
  holidayData: Array<HolidayInterface> = [];

  url = 'https://calendarific.com/api/v2/holidays?&api_key=4f63d297dbdad773e3370d681cbfe19a37e8dcf2& country=IN& year=2019';



constructor(private http: HttpClient) {

  // this.http.get(this.url).subscribe((data) => {
  //   this.database = data;
  //   this.response = this.database.response.holidays;
  //   this.responseFromAPI();
  // });
}



// responseFromAPI(): void {

//   this.response.forEach(data => {
//     this.holidayData.title = data.name;
//     this.holidayData.startDate = data.date.iso;
//     this.holidayData.endDate = data.date.iso;
//     this.date = data.name;
//     console.log(this.holidayData);


//   });

// }

responseFromAPI(responseData): Array < HolidayInterface > {
  console.log('ResponseFromAPIThe First', responseData);
  const holidayResponse = responseData.response.holidays;
  // this.holidayData = {
  //   text: 'Ravci',
  // startDate: "2019-10-03T04:31:00.000+0000",
  // endDate: "2019-10-03T04:31:00.000+0000"
  // };
  console.log('responseFromApi', holidayResponse);

  this.holidayData = holidayResponse.map(data => {
    // this.holidayData.text = data.name;
    // this.holidayData.startDate = data.date.iso;
    // this.holidayData.endDate = data.date.iso;
    return {
      text: data.name,
      startDate: new Date(data.date.iso),
      endDate: new Date(data.date.iso),
      color: '#FF0000'
    };
  });

  return this.holidayData;

}

getHolidayData() {
  console.log('Freedom');
  return this.http.get(this.url)
    .pipe(
      map(this.responseFromAPI),
      tap((data) => { console.log('Tap from service', data); return data; })
    );
}
}

