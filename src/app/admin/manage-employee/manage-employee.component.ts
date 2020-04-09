import { ActivatedRoute } from '@angular/router';
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
  
 header:boolean=false;
 employee:IEmployee;
 filteredEmployee:IEmployee = {Name:"",Id:0,DOB:"",DOJ:"",Salary:0,Email:"",Role:"",TotalLeave:""};
//  errorMessage:string;
 
 constructor(private http:HttpClient,private employeeService:EmployeeserviceService,private route:ActivatedRoute) { }

 empId = Number(this.route.snapshot.paramMap.get('id'));

 ngOnInit(): void {
   this.employeeService.getemployees().subscribe(
     employees => {
       this.employeelist = employees;
       this.filteredEmployees = this.employeelist;

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
 onGetId():void{
  this.route.paramMap.subscribe(
    params => {
      this.empId = +params.get('id');
      console.log(this.empId);
    }
  );
  console.log(this.empId);
  if(this.empId !== null){
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
