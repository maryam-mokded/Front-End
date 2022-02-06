import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/Services/notification.service';
import { Notification } from 'src/app/Models/notification';
import { NotificationsComponent } from 'src/app/internal-components/notifications/notifications.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-navbar-internal',
  templateUrl: './navbar-internal.component.html',
  styleUrls: ['./navbar-internal.component.css']
})
export class NavbarInternalComponent implements OnInit {

  NotificationList!: Notification[];
  nbNotif!:number;
  user!:User;

  constructor(
    private dialog: MatDialog,
    private notificationServ : NotificationService,
    private userServ:UserService,

  ) { }

  ngOnInit(): void {
    this.GetNotificationList();

    this.DetailsUser();
  }



  DetailsUser(){
    //id de l'utilisateur connecter
    this.userServ.ConsulterEmployee(2).subscribe((u) => {
      this.user =u;
      console.log(this.user);
    });
  }

  GetNotificationList() {
    this.notificationServ.ListeNotification(2).subscribe((ListNotification) => {
        this.NotificationList = ListNotification;
        this.nbNotif = ListNotification.length;
      });
    }

    AfficherNotification(notification:Notification){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      localStorage.setItem('Notification', JSON.stringify(notification));
      this.dialog.open(NotificationsComponent, dialogConfig);
    }
}
