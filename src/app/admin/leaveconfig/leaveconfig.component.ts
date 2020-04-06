import { LeaveserviceService } from './../../services/leaveservice.service';
import { Ileave } from './../../models/ileave';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-leaveconfig',
  templateUrl: './leaveconfig.component.html',
  styleUrls: ['./leaveconfig.component.css']
})
export class LeaveconfigComponent implements OnInit {

  filteredLeaves:Ileave[];
  leavelist:Ileave[] = [];
  errorMessage:string;
   
  
  constructor(private http:HttpClient,private leaveSerice:LeaveserviceService) { }
 
  ngOnInit(): void {
    this.leaveSerice.getleaves().subscribe(
      leaves => {
        this.leavelist = leaves;
        this.filteredLeaves = this.leavelist;
      },
      error => this.errorMessage = <any>error
    );
  }

}
