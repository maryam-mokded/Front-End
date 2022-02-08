import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/Models/user';
import { Formation } from 'src/app/Models/formation';
import { UserService } from 'src/app/Services/user.service';
import { FormationService } from 'src/app/Services/formation.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css'],
})
export class AddFormationComponent implements OnInit {
  idEmployee: number = 1;
  Employees!: User[];

  myForm!: FormGroup;
  formation: Formation = new Formation();

  user!: User;

  constructor(
    public authService: AuthService,
    private dialogClose: MatDialog,
    private userServ: UserService,
    private formationServ: FormationService
  ) {}

  ngOnInit(): void {
    this.authService.loadToken();
    this.GetEmployeeList();
    this.ValidatedForm();
    this.GetUserConnectedDetails();
  }

  GetUserConnectedDetails() {
    this.userServ
      .getUserConnectedDetails(this.authService.loggedUser)
      .subscribe((p) => {
        this.user = p;
        console.log(this.user);
      });
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

  AddFormation() {
    this.formationServ
      .AjouterFormation(this.idEmployee, this.formation)
      .subscribe((f) => {
        console.log('Formation Ajouter avec succees !');
        console.log(f);
        window.location.reload();
      });
  }

  GetEmployeeList() {
    this.user = JSON.parse(localStorage.getItem('UserConnected') || '[]') || [];
    this.userServ
      .ListeUserDirection(this.user.direction?.id_Direction)
      .subscribe((ListUser) => {
        this.Employees = ListUser;
        console.log(this.Employees);
      });
  }

  onClose() {
    this.dialogClose.closeAll();
  }
}
