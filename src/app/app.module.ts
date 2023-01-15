import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeelistComponent } from './modules/components/employeelist/employeelist.component';
import { NavbarComponent } from './modules/components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './modules/components/home/home.component';
import { AddEmployeeComponent } from './modules/components/add-employee/add-employee.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './modules/components/edit-employee/edit-employee.component';
import { GetEmployeeByIdComponent } from './modules/components/get-employee-by-id/get-employee-by-id.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminDashboardComponent } from './modules/components/admin/admin.component';
import { UsersComponent } from './modules/components/users/users.component';
import { AdminModule } from './modules/admin/admin.module';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { DnamicFormComponent } from './components/shared/dnamic-form/dnamic-form.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DynamicTableComponent } from './components/shared/dynamic-table/dynamic-table.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    NavbarComponent,
    HomeComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    GetEmployeeByIdComponent,
    LoginComponent,
    SignupComponent,
    AdminDashboardComponent,
    UsersComponent,
    MyAccountComponent,
    DnamicFormComponent,
    DynamicTableComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent, MatNativeDateModule]
})
export class AppModule { }
