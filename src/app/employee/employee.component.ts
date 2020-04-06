import { EmployeeserviceService } from './../services/employeeservice.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IEmployee } from '../models/iemployee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

filteredEmployees:IEmployee[];
employeelist:IEmployee[] = [];
public employeelist2:IEmployee[] = [];
//  emp:IEmployee={""}
 errorMessage:string;
 e:IEmployee;
  // name;
  
     Employee = {
      Name:"",
      Email: "",
      DOB: "",
      DOJ: "",
      Salary: 0,
      Role: "",
      TotalLeave: ""
    }
 

  // SaveFormData(formData: NgForm){
  //   const Employee = {
  //     Name: this.name,
  //     Email: this.email,
  //     DOB: '1-1-1996',
  //     DOJ: '1-1-2019',
  //     Salary: 400000,
  //     Role: 'employee',
  //     TotalLeave: '12'
  //     // Password: this.password
  //   };
  //   this.http.post('http://localhost:5000/api/employee',Employee)
  //   .subscribe((response)=>{
  //     console.log(response);
  //   });

  //   formData.resetForm();
  // }


  constructor(private http:HttpClient,private employeeService:EmployeeserviceService,private router: Router) { }

  ngOnInit(): void {
    this.employeeService.getemployees().subscribe(
      employees => {
        this.employeelist = employees;
        this.filteredEmployees = this.employeelist;
      },
      error => this.errorMessage = <any>error
    );
    // this.employeelist2 = this.employeelist;
    // for(var emp of this.employeelist2){
    //   // if(this.filteredEmployees[0].)
    //   console.log(emp.Name);
    //   // console.log(this.Employee.Email);
    //   // console.log(this.Employee.Email+"hello");
    

    //   if(this.Employee.Email===emp.Email){
    //     console.log("yes"+" "+emp.Email);
    //   }
    // }
  }

  onSubmit(){
    
    for(var emp of this.employeelist){
      // if(this.filteredEmployees[0].)
      console.log(emp["Email"]);
      // console.log(this.Employee.Email);
      // console.log(this.Employee.Email+"hello");
    

      if(this.Employee.Email===emp.Email){
        console.log("yes"+" "+emp.Email);
      }
    }
    console.log(this.employeelist.length);
    // console.log('in onSubmit:', form.valid);
    // this.router.navigateByUrl('/adminlogin').then(nav => {
    //   console.log(nav); // true if navigation is successful
    // }, err => {
    //   console.log(err) // when there's an error
    // });
  }

}
