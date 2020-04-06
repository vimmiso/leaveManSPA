import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { LeaveconfigComponent } from './leaveconfig/leaveconfig.component';
import { LeavelistComponent } from './leavelist/leavelist.component';
import { AdminRouting } from './admin.routing';



@NgModule({
  declarations: [ManageEmployeeComponent, LeaveconfigComponent, LeavelistComponent],
  imports: [
    CommonModule,
    FormsModule,
    AdminRouting
  ]
})
export class AdminModule { }
