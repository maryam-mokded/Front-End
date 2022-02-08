import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddFormationComponent } from '../add-formation/add-formation.component';
import { Historique } from 'src/app/Models/historique';
import { HistoriqueService } from 'src/app/Services/historique.service';
import { HistoriqueComponent } from '../historique/historique.component';
import { FormationService } from 'src/app/Services/formation.service';
import { Formation } from 'src/app/Models/formation';
import { FormationDetailsComponent } from '../formation-details/formation-details.component';
import { UpdateFormationComponent } from '../update-formation/update-formation.component';
import { NotificationService } from 'src/app/Services/notification.service';
import { AuthService } from 'src/app/Services/auth.service';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {

  historique:boolean = false;
  HistoriqueList?:Historique[];
  user!:User;
  idEmployee!:number;
  
  FormationList!: Formation[];

  constructor(
    private dialog: MatDialog,
    public authService: AuthService,
    private historiqueServ : HistoriqueService,
    private formationServ: FormationService,
    private userServ: UserService,
    private notificationServ : NotificationService,
  ) { }

  ngOnInit(): void {
    this.authService.loadToken();
    this.user =JSON.parse(localStorage.getItem('UserConnected') || '[]') || [];
    console.log(this.user)
    this.GetFormationList();
  }

  
  DetailsFormation(formation: Formation) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    localStorage.setItem('Formation', JSON.stringify(formation));
    this.dialog.open(FormationDetailsComponent, dialogConfig);
  }

  SupprimerFormation(formation:Formation){
       this.formationServ.supprimerFormation(formation.id_Formation).subscribe(()=>{
          console.log("Formation Supprimé !")
          window.location.reload();
        });
  }


  EnvoyerFormation(formation:Formation){
    this.formationServ.EnvoyerFormation(formation.id_Formation).subscribe(()=>{
      console.log("Formation Envoyer !")
      this.notificationServ.AjouterNotificationSF(this.user.direction?.id_Direction).subscribe(()=>{
      });
      window.location.reload();
    });
  }

  GetFormationList() {
    this.formationServ.ListeFormationsDirection(this.user.direction?.id_Direction).subscribe((ListEmployee) => {
        this.FormationList = ListEmployee;
        console.log(this.FormationList)
      });
    }
  

  AjouterFormation(){
    this.historique = false;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(AddFormationComponent, dialogConfig);
  }

  AfficherHistorique(){
      this.historique = true;
      this.user =JSON.parse(localStorage.getItem('UserConnected') || '[]') || [];
    //id direction de pilote connecter
    this.historiqueServ.ListeHistorique(this.user.direction?.id_Direction).subscribe((ListH) => {
      this.HistoriqueList = ListH;
      console.log(this.HistoriqueList);
    });

  }

  AfficherNews(){
    this.historique = false;
  }
  
  DetailsHistorique(historique: Historique) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    localStorage.setItem('Historique', JSON.stringify(historique));
    this.dialog.open(HistoriqueComponent, dialogConfig);
  }

  ModifierFormation(formation: Formation) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    localStorage.setItem('Formation', JSON.stringify(formation.id_Formation));
    this.dialog.open(UpdateFormationComponent, dialogConfig);
  }

}
