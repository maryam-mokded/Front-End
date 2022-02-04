import { Component, OnInit } from '@angular/core';
import { Direction } from 'src/app/Models/direction';
import { DirectionService } from 'src/app/Services/direction.service';

@Component({
  selector: 'app-direction-list',
  templateUrl: './direction-list.component.html',
  styleUrls: ['./direction-list.component.css']
})
export class DirectionListComponent implements OnInit {

  directions? : Direction[];

  constructor(
    private directionSer:DirectionService,
  ) { }

  ngOnInit(): void {
  this.AfficherListDirection();
  }

  AfficherListDirection(){
    this.directionSer.ListeDirection().subscribe(direction =>{
      this.directions = direction;
      console.log(this.directions);
     });
  }

}
