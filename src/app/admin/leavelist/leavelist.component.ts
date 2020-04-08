import { EmployeeleaveserviceService } from './../../services/employeeleaveservice.service';
import { Iemployeeleave } from './../../models/iemployeeleave';
import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/models/iemployee';
import { HttpClient } from '@angular/common/http';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';
import { ActivatedRoute } from '@angular/router';

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
  action1:string='Select Action';
  action2:string='Select Action';
  action3:string='Select Action';
  empId;
  header:boolean=false;
  employee:IEmployee;
  filteredEmployee:IEmployee;
 //  errorMessage:string;
  
 
  
  constructor(private http:HttpClient,private employeeService:EmployeeserviceService,private employeeLeaveService:EmployeeleaveserviceService,private route:ActivatedRoute) { }
 
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

    
   this.route.paramMap.subscribe(
    params => {
      this.empId = +params.get('id');
      console.log(this.empId);
    }
  );
  console.log(this.empId);
  if(this.empId){
    this.header=true;
    this.employeeService.getemp(this.empId).subscribe(
      employee => {
        console.log(employee);
        this.employee = employee;
        this.filteredEmployee = this.employee;
      },
      error => this.errorMessage = <any>error
    );
  }else{
    this.header=false;
  }

  }

}
