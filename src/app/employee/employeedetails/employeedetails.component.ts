import { EmployeeleaveserviceService } from './../../services/employeeleaveservice.service';
import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/models/iemployee';
import { HttpClient } from '@angular/common/http';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';
import { ActivatedRoute } from '@angular/router';
import { Iemployeeleave } from 'src/app/models/iemployeeleave';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  filteredEmployees:IEmployee[];
  employeelist:IEmployee[] = [];
  filteredEmployeesleave:Iemployeeleave[];
  employeeleavelist:Iemployeeleave[] = [];
  errorMessage:string;
  show1:boolean = true;
  show2:boolean = false;
  show3:boolean = false;
  show4:boolean = false;
  leavetype;
  fromdate;
  todate;
  status:string = "Pending";

  uniqueid:number = Number(this.route.snapshot.paramMap.get('id'));
   
  SaveFormData(formData: NgForm){
    var date1 = new Date(this.fromdate);
    var date2 = new Date(this.todate);
    var time = date2.getTime()-date1.getTime();
      const days = Number(time/(3600*1000*24));
    console.log(days);
    console.log(date1);
    console.log(date2);
    
    // this.fromdate=this.datePipe.transform(this.fromdate, "dd-MM-yyyy");

    // this.todate=this.datePipe.transform(this.todate, "dd-MM-yyyy");
     const leave = {
      // EmployeeId: this.uniqueid,
      // LeaveId:2,
      // Status:this.status,
      // StartDate:date1.toDateString(),
      // EndDate:date2.toDateString(),
      // LeaveType:this.leavetype,
      // NoofDays: days
      EmployeeId: 2,
      LeaveId:2,
      Status:'Pending',
      StartDate:'12-04-2020',
      EndDate:'16-04-2020',
      LeaveType:'Sick',
      NoofDays: 5
      // Password: this.password
    };
    console.log(leave);
    this.http.post('http://localhost:5000/api/empleavemapping',leave)
    .subscribe((response)=>{
      console.log(response);
    });

    formData.resetForm();
  }

  constructor(private http:HttpClient,private employeeService:EmployeeserviceService,private route:ActivatedRoute,private employeeleaveservice:EmployeeleaveserviceService) { }
 
  ngOnInit(): void {
    this.employeeService.getemployees().subscribe(
      employees => {
        this.employeelist = employees;
        this.filteredEmployees = this.employeelist;
      },
      error => this.errorMessage = <any>error
    );
    this.employeeleaveservice.getemployeeleavemaps().subscribe(
      leaves => {
        this.employeeleavelist = leaves;
        this.filteredEmployeesleave = this.employeeleavelist;
      },
      error => this.errorMessage = <any>error
    );
    // console.log(this.employeeleavelist)
    // console.log(this.uniqueid);
  }

  onClick1():void{
    this.show1 = true;
    this.show2 = false;
    this.show3 = false;
    this.show4 = false;

  }

  onClick2():void{
    this.show1 = false;
    this.show2 = true;
    this.show3 = false;
    this.show4 = false;

  }

  onClick3():void{
    this.show1 = false;
    this.show2 = false;
    this.show3 = true;
    this.show4 = false;

  }

  onClick4():void{
    this.show1 = false;
    this.show2 = true;
    this.show3 = false;
    this.show4 = true;

  }
  
  // Id:number,
  //   EmployeeId:number,
  //   LeaveId:number,
  //   Status:string,
  //   StartDate:string,
  //   EndDate:string,
  //   LeaveType:string,
  //   NoofDays:number
 

  


}
