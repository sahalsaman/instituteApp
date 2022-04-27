import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { StudentsListViewComponent } from './students-list-view/students-list-view.component';
import { NotificationComponent } from './notification/notification.component';
import { StudentsAttendanceComponent } from './students-attendance/students-attendance.component';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { ExamResultComponent } from './exam-result/exam-result.component';
import { StudentsFeeComponent } from './students-fee/students-fee.component';
import { TimeTableComponent } from './time-table/time-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    StudentRegistrationComponent,
    StudentsListViewComponent,
    NotificationComponent,
    StudentsAttendanceComponent,
    TeachersListComponent,
    ExamResultComponent,
    StudentsFeeComponent,
    TimeTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
