import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageCustomersComponent } from './manage-customers/manage-customers.component';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';
import { EmailPageComponent } from './email-page/email-page.component';
import { TaskPageComponent } from './task-page/task-page.component';
import { CustomerContactFormComponent } from './customer-contact-form/customer-contact-form.component';
import { UpdateContactFormComponent } from './update-contact-form/update-contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerDashboardComponent,
    EmployeeDashboardComponent,
    AdminDashboardComponent,
    ManageCustomersComponent,
    ManageEmployeesComponent,
    EmailPageComponent,
    TaskPageComponent,
    CustomerContactFormComponent,
    UpdateContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
