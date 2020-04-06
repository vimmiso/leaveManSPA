import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/models/iemployee';
import { HttpClient } from '@angular/common/http';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.css']
})
export class ManageEmployeeComponent implements OnInit {

  filteredEmployees:IEmployee[];
 employeelist:IEmployee[] = [];
 errorMessage:string;
  
 
 constructor(private http:HttpClient,private employeeService:EmployeeserviceService) { }

 ngOnInit(): void {
   this.employeeService.getemployees().subscribe(
     employees => {
       this.employeelist = employees;
       this.filteredEmployees = this.employeelist;
     },
     error => this.errorMessage = <any>error
   );
 }
}
