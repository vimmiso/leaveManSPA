import { LeaveconfigComponent } from './leaveconfig/leaveconfig.component';
import { LeavelistComponent } from './leavelist/leavelist.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES2: Routes = [
    {path: 'manageemp',component: ManageEmployeeComponent},
    {path: 'leavelist',component: LeavelistComponent},
    {path: 'leaveconfig',component: LeaveconfigComponent}    
];

@NgModule({
    imports: [RouterModule.forChild(APP_ROUTES2)],
    exports: [RouterModule]
    
})
export class AdminRouting{

}