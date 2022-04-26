import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { StudentsListViewComponent } from './students-list-view/students-list-view.component';

const routes: Routes = [
  {
    path:"",component:LoginComponent
  },{
    path:"dashboard",component:DashboardComponent
  },{
    path:"studentReg",component:StudentRegistrationComponent
  },{
    path:"studentList",component:StudentsListViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
