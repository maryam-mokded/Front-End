import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/Models/user';
import { Formation } from 'src/app/Models/formation';
import { UserService } from 'src/app/Services/user.service';
import { FormationService } from 'src/app/Services/formation.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

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

  idFormation!: number;
  constructor(
    private dialogClose: MatDialog,
    public authService: AuthService,
    private userServ: UserService,
    private formationServ: FormationService
  ) {}

  ngOnInit(): void {

    this.authService.loadToken();
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
    this.ValidatedForm();
  }

  ValidatedForm() {
    this.myForm = new FormGroup({
      theme: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(100),
      ]),
      type: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(100),
      ]),
      idEmployee: new FormControl(null),
    });
  }

  get Employee() {
    return this.myForm.get('idEmployee');
  }
  get theme() {
    return this.myForm.get('theme');
  }
  get type() {
    return this.myForm.get('type');
  }

  GetEmployeeList() {
    this.userServ.ListeUserDirection(1).subscribe((ListUser) => {
      this.Employees = ListUser;
      console.log(this.Employees);
    });
  }

  MofidierFormation() {
    // console.log(this.idEmployee);
    // console.log(this.formation);
    // console.log(this.formation.id_Formation);

    this.formationServ
      .modifierFormation(
        this.formation.id_Formation,
        this.idEmployee,
        this.formation
      )
      .subscribe(() => {
        console.log('Formation Modifier avec succees !');
        window.location.reload();
      });

    // this.formationServ.modifierFormation(this.formation.id_Formation,this.idEmployee,this.formation)
    //     .subscribe(f=>{
    //        window.location.reload();
    //     },
    //     (error) => {
    //       console.log("Failed")
    //     }
    //   );
  }

  updateOffre() {}

  onClose() {
    this.dialogClose.closeAll();
  }
}
