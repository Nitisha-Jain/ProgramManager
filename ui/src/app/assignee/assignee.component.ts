import { Component, OnInit } from '@angular/core';
import { AssigneeService } from '../assignee.service';
import { Assignee, Program1 } from '../product';
import { element } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignee',
  templateUrl: './assignee.component.html',
  styleUrls: ['./assignee.component.sass']
})
export class AssigneeComponent implements OnInit {
  data1: any = [];
  constructor(private assigneeService: AssigneeService, private router: Router) { }

  ngOnInit() {
    this.getAllData();

  }
  onChange(e) {
    e.status = !e.status;
    console.log(e.status);
  }
  getAllData(): void {
    // let sortProductData: ProductInterface[];
    this.assigneeService.getData().
      subscribe((data) => {
        // sortProductData = data;
        // sortProductData.sort(this.sortByProperty('createdAt'));

        this.data1.push(data);
        console.log('hyy', this.data1);

      });

  }
  openCalendar(data) {
    console.log('program call', data);

    this.router.navigateByUrl('/assigneecalendar');
  }

}
