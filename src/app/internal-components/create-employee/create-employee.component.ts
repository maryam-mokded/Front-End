import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DirectionService } from 'src/app/Services/direction.service';
import { Direction } from 'src/app/Models/direction';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  
  idDirection!:number;
  user:User = new User();
  direction!:Direction[];
  myForm!:FormGroup;

  constructor(
    private dialogClose: MatDialog,
    private directionServ : DirectionService,
    private userServ:UserService,
  ) { }

  ngOnInit(): void {
    this.GetDirectionList();
  }

  GetDirectionList(){
    this.directionServ.ListeDirection().subscribe(d =>{
      this.direction = d;
      console.log(this.direction);
     });
  }




  AddEmployee(){
    this.userServ.AjouterEmployee(this.idDirection,this.user).subscribe(empl =>{
      console.log("Employee Ajouter avec succees !")
      console.log(empl);
      window.location.reload()
    })
  }


  onClose() {
    this.dialogClose.closeAll();
  }

}
