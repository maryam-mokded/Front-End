import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/Models/user';
import { Formation } from 'src/app/Models/formation';
import { UserService } from 'src/app/Services/user.service';
import { FormationService } from 'src/app/Services/formation.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-formation',
  templateUrl: './update-formation.component.html',
  styleUrls: ['./update-formation.component.css'],
})
export class UpdateFormationComponent implements OnInit {
  idEmployee!: number;
  Employees!: User[];

  formation: Formation = new Formation();
  myForm!: FormGroup;

  idFormation!:number;
  constructor(
    private dialogClose: MatDialog,
    private userServ: UserService,
    private formationServ: FormationService
  ) {}

  ngOnInit(): void {
    this.formationServ
      .ConsulterFormation(
        JSON.parse(localStorage.getItem('Formation') || '[]') || []
      )
      .subscribe((f) => {
        this.formation = f;
        console.log(this.formation);

        this.idEmployee = this.formation.user?.id_User;
        console.log(this.idEmployee);
      });

    this.GetEmployeeList();
  }

  GetEmployeeList() {
    this.userServ.ListeUserDirection(1).subscribe((ListUser) => {
      this.Employees = ListUser;
      console.log(this.Employees);
    });
  }

  MofidierFormation(){
    // console.log(this.idEmployee);
    // console.log(this.formation);
    // console.log(this.formation.id_Formation);
    
    this.formationServ.modifierFormation(this.formation.id_Formation,this.idEmployee,this.formation).subscribe(() =>{
      console.log("Formation Modifier avec succees !")
      window.location.reload() 
    })


    // this.formationServ.modifierFormation(this.formation.id_Formation,this.idEmployee,this.formation)
    //     .subscribe(f=>{
    //        window.location.reload();
    //     },
    //     (error) => {
    //       console.log("Failed")
    //     }
    //   );
  
  }


  updateOffre(){

    }

  onClose() {
    this.dialogClose.closeAll();
  }
}
