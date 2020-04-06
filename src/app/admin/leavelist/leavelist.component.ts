import { EmployeeleaveserviceService } from './../../services/employeeleaveservice.service';
import { Iemployeeleave } from './../../models/iemployeeleave';
import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/models/iemployee';
import { HttpClient } from '@angular/common/http';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';

@Component({
  selector: 'app-leavelist',
  templateUrl: './leavelist.component.html',
  styleUrls: ['./leavelist.component.css']
})
export class LeavelistComponent implements OnInit {

  filteredEmployees:IEmployee[];
  employeelist:IEmployee[] = [];
  filteredEmployeeLeaves:Iemployeeleave[];
  employeeLeavelist:Iemployeeleave[] = [];
  errorMessage:string;
  action:string;
   
  
  constructor(private http:HttpClient,private employeeService:EmployeeserviceService,private employeeLeaveService:EmployeeleaveserviceService) { }
 
  ngOnInit(): void {
    this.employeeService.getemployees().subscribe(
      employees => {
        this.employeelist = employees;
        this.filteredEmployees = this.employeelist;
      },
      error => this.errorMessage = <any>error
    );

    this.employeeLeaveService.getemployeeleavemaps().subscribe(
      employeeLeaves => {
        this.employeeLeavelist = employeeLeaves;
        this.filteredEmployeeLeaves = this.employeeLeavelist;
      },
      error => this.errorMessage = <any>error
    );

  }

}
