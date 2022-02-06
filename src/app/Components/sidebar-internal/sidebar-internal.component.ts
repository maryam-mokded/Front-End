import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-sidebar-internal',
  templateUrl: './sidebar-internal.component.html',
  styleUrls: ['./sidebar-internal.component.css']
})
export class SidebarInternalComponent implements OnInit {

  user!:User;
  constructor(
    private userServ:UserService,
  ) { }

  ngOnInit(): void {
    this.DetailsUser();
  }



  DetailsUser(){
    //id de l'utilisateur connecter
    this.userServ.ConsulterEmployee(2).subscribe((u) => {
      this.user =u;
      console.log(this.user);
    });
  }
}
