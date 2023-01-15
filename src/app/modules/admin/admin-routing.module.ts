import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from 'src/app/components/Auth/authguard.guard';
import { AddEmployeeComponent } from '../components/add-employee/add-employee.component';
import { AdminDashboardComponent } from '../components/admin/admin.component';
import { EditEmployeeComponent } from '../components/edit-employee/edit-employee.component';
import { EmployeelistComponent } from '../components/employeelist/employeelist.component';
import { GetEmployeeByIdComponent } from '../components/get-employee-by-id/get-employee-by-id.component';
import { HomeComponent } from '../components/home/home.component';
import { UsersComponent } from '../components/users/users.component';

const routes: Routes = [
  {
    path:'',component:AdminDashboardComponent, canActivate: [AuthguardGuard],
    children:[
    { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'employees', component: EmployeelistComponent },
    { path: 'userslist', component: UsersComponent },
    { path: 'add', component: AddEmployeeComponent },
    { path: 'employee/edit/:id', component: EditEmployeeComponent },
    { path: 'employee/view/:id', component: GetEmployeeByIdComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
