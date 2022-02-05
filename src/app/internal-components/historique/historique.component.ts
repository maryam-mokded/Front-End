import { Component, OnInit } from '@angular/core';
import { Historique } from 'src/app/Models/historique';
import { MatDialog } from '@angular/material/dialog';
import { HistoriqueService } from 'src/app/Services/historique.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

  Historique!:Historique;

  constructor(
    private dialogClose: MatDialog,
    private historiqueServ:HistoriqueService
  ) { }

  ngOnInit(): void {
   this.DetailsHistorique();
  }

  DetailsHistorique(){
    this.Historique =JSON.parse(localStorage.getItem('Historique') || '[]') || [];
    console.log(this.Historique);
  }

  closeDetails(){
    this.dialogClose.closeAll();
  }

}
