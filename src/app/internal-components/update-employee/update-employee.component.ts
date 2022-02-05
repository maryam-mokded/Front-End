import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Direction } from 'src/app/Models/direction';
import { User } from 'src/app/Models/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { DirectionService } from 'src/app/Services/direction.service';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  idDirection!: number;
  Direction!: Direction[];

  Employee: User = new User();
  myForm!: FormGroup;


  constructor(
    private dialogClose: MatDialog,
    private userServ: UserService,
    private directionServ : DirectionService
  ) { }

  ngOnInit(): void {

    this.userServ
    .ConsulterEmployee(
      JSON.parse(localStorage.getItem('Employee') || '[]') || []
    )
    .subscribe((e) => {
      this.Employee = e;
      console.log(this.Employee);

      this.idDirection = this.Employee.direction?.id_Direction;
      console.log(this.idDirection);
    });


    this.GetDirectionList();

  }


  MofidierEmployee(){
    console.log(this.idDirection);
    console.log(this.Employee);
    console.log(this.Employee.id_User);
    
    this.userServ.modifierUser(this.idDirection,this.Employee.id_User,this.Employee).subscribe(() =>{
      console.log("Formation Modifier avec succees !")
      window.location.reload() 
    })

  }

  GetDirectionList() {
    this.directionServ.ListeDirection().subscribe((ListDir) => {
      this.Direction = ListDir;
      console.log(this.Direction);
    });
  }

  UpdateEmployee(){

  }


  onClose() {
    this.dialogClose.closeAll();
  }



}
