import { EmployeedetailsComponent } from './employee/employeedetails/employeedetails.component';
import { AdminComponent } from './admin/admin.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';

const APP_ROUTES: Routes = [
    {path: '',redirectTo: '/home',pathMatch: 'full'},
    {path: 'home',component: HomeComponent},
    {path: 'employeelogin',component: EmployeeComponent},
    {path: 'adminlogin',component: AdminComponent},
    {path: 'employeelogin/:id',component: EmployeedetailsComponent},
    { path: '**', component: PagenotfoundComponent }
    
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
    
})
export class AppRouting{

}