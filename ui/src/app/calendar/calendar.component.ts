import { Component, enableProdMode, ViewChild } from '@angular/core';
import { Service } from '../calendar.service';
import { DxSchedulerComponent } from 'devextreme-angular';
import { ProductService } from '../product.service';
import { ProductInterface, Employee } from '../product';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass'],
  preserveWhitespaces: true
})
export class CalendarComponent {

  calenderData: ProductInterface;
  productName: string;
  resourcesDataSource: Employee[];
  employee: any = [];
  currentDate: Date = new Date();
  schedulerDataSource: any = {};
  @ViewChild(DxSchedulerComponent, { static: false }) scheduler: DxSchedulerComponent;
  showAppointmentPopup(e) {

    this.scheduler.instance.showAppointmentPopup(false);
  }



  onAppointmentFormOpening(data) {
    // tslint:disable-next-line: one-variable-per-declaration
    let // tslint:disable-next-line: prefer-const
      form = data.form,
      startDate = data.appointmentData.startDate;

    form.option('items', [{
      label: {
        text: 'Program name'
      },
      editorType: 'dxTextBox',
      dataField: 'text',
      editorOptions: {
        width: '100%',
        displayExpr: 'text',
        value: data.appointmentData.text,

      }
    }, {
      label: {
        text: 'Agenda'
      },
      name: 'agenda',
      editorType: 'dxTextArea',
      editorOptions: {
        width: '100%',
        value: this.calenderData.agenda,
        readOnly: true
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
      , {
      label: {
        text: 'Assignee'
      },

      dataField: 'assignee',
      editorType: 'dxTagBox',
      dataSource: 'resourcesDataSource',
      editorOptions: {
        allowMultiple: true,
        items: this.resourcesDataSource,
        displayExpr: 'text',
        valueExpr: 'text',
        width: '100%',
        value: data.appointmentData.assignee,
        onValueChanged(args) {

          console.log(args.value);

        }
      }
    },
    {
      label: {
        text: 'Weeks'
      },
      name: 'weeks',
      editorType: 'dxTextArea',
      editorOptions: {
        width: '100%',
        value: this.calenderData.durationWeek,
        readOnly: true
      }
    },
    {
      label: {
        text: 'Day'
      },
      name: 'day',
      editorType: 'dxTextArea',
      editorOptions: {
        width: '50%',
        value: this.calenderData.durationDays,
        readOnly: true
      }
    },
    {
      label: {
        text: 'Hours'
      },
      name: 'hours',
      editorType: 'dxTextArea',
      editorOptions: {
        width: '50%',
        value: this.calenderData.durationHours,
        readOnly: true
      }
    }


    ]);
  }
  constructor(private service: Service, private productService: ProductService) {
    this.schedulerDataSource = null;
    this.schedulerDataSource = service.getProgram();

  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.calenderData = this.productService.calenderData;
    console.log(this.calenderData);
    this.productName = this.calenderData.productName;
    this.resourcesDataSource = this.getAssignee();

  }
  getAssignee(): any {
    this.service.getAssignee().subscribe(data => {
      data.forEach(element => {
        this.employee.push(element);
      });
    });
    return this.employee;
  }


}
