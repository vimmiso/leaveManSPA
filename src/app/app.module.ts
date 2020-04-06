import { AppRouting } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { EmployeedetailsComponent } from './employee/employeedetails/employeedetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// RECOMMENDED
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HeaderComponent,
    EmployeeListComponent,
    HomeComponent,
    AdminComponent,
    PagenotfoundComponent,
    EmployeedetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRouting,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
