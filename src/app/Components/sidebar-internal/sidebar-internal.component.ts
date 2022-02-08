import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-sidebar-internal',
  templateUrl: './sidebar-internal.component.html',
  styleUrls: ['./sidebar-internal.component.css'],
})
export class SidebarInternalComponent implements OnInit {
  user!: User;
  constructor(
    private userServ: UserService,
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    
    this.authService.loadToken();
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

  onLogout() {
    this.authService.logout();
  }
}
