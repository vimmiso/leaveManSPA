import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

 
  name;
  email;
  password;
  SaveFormData(formData: NgForm){
    // var date1 = new Date(this.fromdate);
    // var date2 = new Date(this.todate);
    // var time = date2.getTime()-date1.getTime();
    //   const days = Number(time/(3600*1000*24));
    // console.log(days);
    // console.log(date1);
    // console.log(date2);
    
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
    this.httpClient.post('http://localhost:5000/api/empleavemapping',leave)
    .subscribe((response)=>{
      console.log(response);
    });

    formData.resetForm();
  }

  // SaveFormData(formData: NgForm){
  //   const Employee = {
  //     Name: 'Name',
  //     Email: 'Email@gmail.com',
  //     DOB: '1-1-1996',
  //     DOJ: '1-1-2019',
  //     Salary: 400000,
  //     Role: 'employee',
  //     TotalLeave: '12'
  //     // Password: this.password
  //   };
  //   this.httpClient.post('http://localhost:5000/api/employee',Employee)
  //   .subscribe((response)=>{
  //     console.log(response);
  //   });

  //   formData.resetForm();
  // }

  constructor(private httpClient:HttpClient) { }


  ngOnInit(): void {
  }

}
