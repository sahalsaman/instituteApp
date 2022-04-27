import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExamResultComponent } from './exam-result/exam-result.component';
import { LoginComponent } from './login/login.component';
import { NotificationComponent } from './notification/notification.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { StudentsAttendanceComponent } from './students-attendance/students-attendance.component';
import { StudentsFeeComponent } from './students-fee/students-fee.component';
import { StudentsListViewComponent } from './students-list-view/students-list-view.component';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { TimeTableComponent } from './time-table/time-table.component';

const routes: Routes = [
  {
    path:"",component:LoginComponent
  },{
    path:"dashboard",component:DashboardComponent
  },{
    path:"studentReg",component:StudentRegistrationComponent
  },{
    path:"studentList",component:StudentsListViewComponent
  },{
    path:"noti",component:NotificationComponent
  },{
    path:"stdAttendance",component:StudentsAttendanceComponent
  },{
    path:"teachersList",component:TeachersListComponent
  },{
    path:"examresult",component:ExamResultComponent
  },{
    path:"studentsfee",component:StudentsFeeComponent
  },{
    path:"timetable",component:TimeTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
