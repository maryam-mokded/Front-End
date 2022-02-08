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
import { Historique } from 'src/app/Models/historique';
import { HistoriqueService } from 'src/app/Services/historique.service';
import { HistoriqueComponent } from '../historique/historique.component';

import { NotificationService } from 'src/app/Services/notification.service';
import { Notification } from 'src/app/Models/notification';


@Component({
  selector: 'app-direction-details',
  templateUrl: './direction-details.component.html',
  styleUrls: ['./direction-details.component.css'],
})
export class DirectionDetailsComponent implements OnInit {

  counter: number = 0;
  ShowToast: string = 'hide';

  intervalId?:any;

  pilote: User =new User();
  FormationList!: Formation[];
  HistoriqueList!: Historique[];
  data: any;
  direction!: Direction;
  IdDirection!: number;
  historique:boolean=false;
  testNotify:boolean=false;

  LenListFormation?:number;

  notification!:Notification;

  constructor(
    private dialog: MatDialog,
    private router: ActivatedRoute,
    private directionServ: DirectionService,
    private userServ: UserService,
    private formationServ: FormationService,
    private historiqueServ : HistoriqueService,
    private notificationServ : NotificationService,
  ) {}

  ngOnInit(): void {

    //Recuperation de l'id
    this.data = this.router.snapshot.params.id;

    this.GetDirection();
    this.GetPiloteDetails();
    this.GetFormationList();
  }

  TestNotify(){
    console.log(this.LenListFormation)

  }

  AfficherHistorique(){
    this.historique = true;
    this.historiqueServ.ListeHistorique(this.data).subscribe((ListH) => {
      this.HistoriqueList = ListH;
      console.log(this.HistoriqueList);
    });

  }
  AfficherNews(){
    this.historique = false;
  }

  Notify(){
    this.notificationServ.AjouterNotification(this.pilote.id_User).subscribe(()=>{
      this.showToast();
    });
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

  GetFormationList() {
  this.formationServ.ListeFormationsServiceF(this.data).subscribe((ListEmployee) => {
      this.FormationList = ListEmployee;
        if(this.FormationList.length != 0){
          this.testNotify =false;
        }else if(this.FormationList.length == 0){
          this.testNotify =true;
        }
    });

  }

  DetailsFormation(formation: Formation) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    localStorage.setItem('Formation', JSON.stringify(formation));
    this.dialog.open(FormationDetailsComponent, dialogConfig);
  }

  DetailsHistorique(historique: Historique) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    localStorage.setItem('Historique', JSON.stringify(historique));
    this.dialog.open(HistoriqueComponent, dialogConfig);
  }

  AcceptFormation(formation:Formation){
    this.historiqueServ.AcceptFormation(formation.id_Formation).subscribe(()=>{
      console.log("Formation Accepter !");
      window.location.reload();
    });
  }

  RefuseFormation(formation:Formation){
    this.historiqueServ.RefuseFormation(formation.id_Formation).subscribe(()=>{
      console.log("Formation Refuser !");
      window.location.reload();
    });
  }





  showToast() {
    if (this.ShowToast == 'hide') {
      setTimeout(() => {
        this.ShowToast = 'show';
        console.log(this.ShowToast);
      }, 1);
    }

    setTimeout(() => {
      this.ShowToast = 'hide';
      console.log(this.ShowToast);
    }, 6100);
    this.intervalId = setInterval(() => {
      this.counter = this.counter + 1;
      console.log(this.counter);
      if (this.counter === 6)
      clearInterval(this.intervalId);
    }, 1000);
    this.counter=0
 }


}
