import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/Models/user';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  Employee!:User;

  constructor(    
    private dialogClose: MatDialog,
    ) { }

  ngOnInit(): void {
    this.DetailsEmployee();
  }


  DetailsEmployee(){
    this.Employee =JSON.parse(localStorage.getItem('Employee') || '[]') || [];
    console.log(this.Employee);  
  }

  onClose() {
    this.dialogClose.closeAll();
  }

}
