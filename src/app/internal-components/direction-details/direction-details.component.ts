import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Direction } from 'src/app/Models/direction';
import { User } from 'src/app/Models/user';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Formation } from 'src/app/Models/formation';
import { DirectionService } from 'src/app/Services/direction.service';
import { UserService } from 'src/app/Services/user.service';
import { FormationService } from 'src/app/Services/formation.service';
import { FormationDetailsComponent } from '../formation-details/formation-details.component';

@Component({
  selector: 'app-direction-details',
  templateUrl: './direction-details.component.html',
  styleUrls: ['./direction-details.component.css'],
})
export class DirectionDetailsComponent implements OnInit {
 
  pilote!: User;
  Employees!: User[];
  data: any;
  direction!: Direction;
  IdDirection!: number;

  constructor(
    private dialog: MatDialog,
    private router: ActivatedRoute,
    private directionServ: DirectionService,
    private userServ: UserService,
    private formationServ: FormationService
  ) {}

  ngOnInit(): void {
    //Recuperation de l'id
    this.data = this.router.snapshot.params.id;

    this.GetDirection();
    this.GetPiloteDetails();
    this.GetEmployeeList();
  }

  GetDirection() {
    this.directionServ.ConsulterDirection(this.data).subscribe((d) => {
      this.direction = d;
    });
  }

  GetPiloteDetails() {
    this.userServ.getPiloteDetails(this.data).subscribe((p) => {
      this.pilote =p;
      console.log(this.pilote);
    });
  }

  GetEmployeeList() {
  this.userServ.ListeUserDirection(this.data).subscribe((ListEmployee) => {
      this.Employees = ListEmployee;
      console.log(this.Employees);
    });
  }

  DetailsFormation(employee: User) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    localStorage.setItem('Employee', JSON.stringify(employee));
    this.dialog.open(FormationDetailsComponent, dialogConfig);
  }
}
