import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Formation } from 'src/app/Models/formation';
import { User } from 'src/app/Models/user';
import { FormationService } from 'src/app/Services/formation.service';

@Component({
  selector: 'app-formation-details',
  templateUrl: './formation-details.component.html',
  styleUrls: ['./formation-details.component.css']
})
export class FormationDetailsComponent implements OnInit {

  Employee!:User;

  constructor(
    private dialogClose: MatDialog,
    private formationServ:FormationService
    ) { }

  ngOnInit(): void {
   this.DetailsFormation();
  }

  DetailsFormation(){
    this.Employee =JSON.parse(localStorage.getItem('Employee') || '[]') || [];
    console.log(this.Employee);  
  }

  closeDetails(){
    this.dialogClose.closeAll();
  }
}
