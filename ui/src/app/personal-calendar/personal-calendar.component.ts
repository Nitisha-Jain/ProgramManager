import { Component, OnInit, enableProdMode, ViewChild } from '@angular/core';
import { DxSchedulerComponent } from 'devextreme-angular';
import { ProductService } from '../product.service';
import { PersonService } from '../services/person.service';



if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
@Component({
  selector: 'app-personal-calendar',
  templateUrl: './personal-calendar.component.html',
  styleUrls: ['./personal-calendar.component.sass']
})
export class PersonalCalendarComponent implements OnInit {

  currentDate: Date = new Date();
  schedulerDataSource: any = {};
  @ViewChild(DxSchedulerComponent, { static: false }) scheduler: DxSchedulerComponent;

  constructor(private personService: PersonService) {
    this.schedulerDataSource = null;
    this.schedulerDataSource = personService.getTasks();

  }

  ngOnInit() {
  }

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
        text: 'Task name'
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



}
