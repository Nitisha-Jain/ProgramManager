import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { ProductComponent } from './product/product.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ProductcardsComponent } from './productcards/productcards.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProgramFormComponent } from './program-form/program-form.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CalendarComponent } from './calendar/calendar.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { DevExtremeModule } from 'devextreme-angular';
import { DxSchedulerModule, DxDataGridModule, DxButtonModule, DxTemplateModule } from 'devextreme-angular';
import { DxSpeedDialActionModule } from 'devextreme-angular';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Service } from './calendar.service';
import { AvatarModule } from 'ngx-avatar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { GovtHolidayComponent } from './govt-holiday/govt-holiday.component';
import { PersonalCalendarComponent } from './personal-calendar/personal-calendar.component';
import { AssigneeComponent } from './assignee/assignee.component';
import { AssigneeCalendarComponent } from './assignee-calendar/assignee-calendar.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductcardsComponent,
    ProductFormComponent,
    ProgramFormComponent,
    SidenavComponent,
    CalendarComponent,
    GovtHolidayComponent,
    PersonalCalendarComponent,
    AssigneeComponent,
    AssigneeCalendarComponent,

  ],
  entryComponents: [
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FlexLayoutModule,
    MatDialogModule,
    MatChipsModule,
    MatExpansionModule,
    LayoutModule,
    DxTemplateModule,
    DxSchedulerModule,
    DxDataGridModule,
    DevExtremeModule,
    DxButtonModule,
    DxSpeedDialActionModule,
    AvatarModule,
    MatCheckboxModule,
    MatProgressBarModule
  ],
  providers: [Service],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
export class PizzaPartyAppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
