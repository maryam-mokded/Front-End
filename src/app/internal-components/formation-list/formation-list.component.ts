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


@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {

  historique:boolean = false;
  HistoriqueList?:Historique[];

  idEmployee!:number;
  
  FormationList!: Formation[];

  constructor(
    private dialog: MatDialog,
    private historiqueServ : HistoriqueService,
    private formationServ: FormationService,
  ) { }

  ngOnInit(): void {
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
      window.location.reload();
    });
  }

  GetFormationList() {
    //id direction de pilote connecter
    this.formationServ.ListeFormationsDirection(1).subscribe((ListEmployee) => {
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
    //id direction de pilote connecter
    this.historiqueServ.ListeHistorique(1).subscribe((ListH) => {
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
