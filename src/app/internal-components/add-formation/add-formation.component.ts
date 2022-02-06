import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/Models/user';
import { Formation } from 'src/app/Models/formation';
import { UserService } from 'src/app/Services/user.service';
import { FormationService } from 'src/app/Services/formation.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css']
})
export class AddFormationComponent implements OnInit {

  idEmployee:number = 1;
  Employees!:User[];

  myForm!:FormGroup;
  formation:Formation = new Formation();

  constructor(
    private dialogClose: MatDialog,
    private userServ : UserService,
    private formationServ : FormationService,
    ) { }

  ngOnInit(): void {
    this.GetEmployeeList();
    this.ValidatedForm();
  }



  ValidatedForm(){
    this.myForm = new FormGroup({
      'theme' : new FormControl(null,[Validators.required, Validators.minLength(2),Validators.maxLength(100)]),
      'type' : new FormControl(null,[Validators.required, Validators.minLength(2),Validators.maxLength(100)]),
      'idEmployee' : new FormControl(null),
  });
 }


 get Employee(){
   return this.myForm.get('idEmployee') ;
 }
 get theme(){
   return this.myForm.get('theme') ;
 }
 get type(){
   return this.myForm.get('type') ;
 }

  AddFormation(){
    // console.log(this.idEmployee)
    this.formationServ.AjouterFormation(this.idEmployee,this.formation).subscribe(f =>{
      console.log("Formation Ajouter avec succees !")
      console.log(f);
      window.location.reload()
    })
  }

  GetEmployeeList(){
    this.userServ.ListeUserDirection(1).subscribe(ListUser =>{
      this.Employees = ListUser;
      console.log(this.Employees);
     });
  }

  onClose() {
    this.dialogClose.closeAll();
  }
}
