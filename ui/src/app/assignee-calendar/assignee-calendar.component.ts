<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit, enableProdMode, ViewChild } from '@angular/core';
import { DxSchedulerComponent } from 'devextreme-angular';
import { ProductService } from '../product.service';
import { PersonService } from '../services/person.service';
import { AssigneeCalendarService } from '../assignee-calendar.service';

>>>>>>> c13d9b68a0210ac82cc38714d27fdd302fa28707

@Component({
  selector: 'app-assignee-calendar',
  templateUrl: './assignee-calendar.component.html',
  styleUrls: ['./assignee-calendar.component.sass']
})
export class AssigneeCalendarComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  currentDate: Date = new Date();
  schedulerDataSource: any = {};
  @ViewChild(DxSchedulerComponent, { static: false }) scheduler: DxSchedulerComponent;

  constructor(private assigneeService: AssigneeCalendarService) {
    this.schedulerDataSource = null;
    this.schedulerDataSource = assigneeService.getTasks();

  }
>>>>>>> c13d9b68a0210ac82cc38714d27fdd302fa28707

  ngOnInit() {
  }

<<<<<<< HEAD
=======
  showAppointmentPopup(popup) {

    this.scheduler.instance.showAppointmentPopup(false);
  }



  onAppointmentFormOpening(data) {
    // tslint:disable-next-line: one-variable-per-declaration
    let // tslint:disable-next-line: prefer-const
      form = data.form,
      startDate = data.appointmentData.startDate;

    form.option('items', [{
      label: {
        text: 'Session name'
      },
      editorType: 'dxTextBox',
      dataField: 'text',
      editorOptions: {
        width: '100%',
        displayExpr: 'text',
        value: data.appointmentData.text,

      }
    }, {
      dataField: 'startDate',
      editorType: 'dxDateBox',
      editorOptions: {
        width: '100%',
        type: 'datetime',
        max: '10000',
        onValueChanged(args) {
          startDate = args.value;
          console.log(startDate);
          form.getEditor('endDate')
            .option('value', new Date(startDate.getTime() + 40 * 24 * 601000));
        }
      }
    }, {
      name: 'endDate',
      dataField: 'endDate',
      editorType: 'dxDateBox',
      editorOptions: {

        width: '100%',
        type: 'datetime',
        readOnly: true,
      }
    }
    ]);
  }



>>>>>>> c13d9b68a0210ac82cc38714d27fdd302fa28707
}
