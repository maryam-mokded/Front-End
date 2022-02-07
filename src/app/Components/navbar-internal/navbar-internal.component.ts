import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/Services/notification.service';
import { Notification } from 'src/app/Models/notification';
import { NotificationsComponent } from 'src/app/internal-components/notifications/notifications.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';
import { AuthService } from 'src/app/Services/auth.service';
import { Mail } from 'src/app/Models/mail';
import { MailsService } from 'src/app/Services/mails.service';

@Component({
  selector: 'app-navbar-internal',
  templateUrl: './navbar-internal.component.html',
  styleUrls: ['./navbar-internal.component.css']
})
export class NavbarInternalComponent implements OnInit {

  NotificationList!: Notification[];
  nbNotif!:number;
  user!:User;

  nbMsg!: number;
  mails?: Mail[];

  constructor(
    private dialog: MatDialog,
    private mailServ: MailsService,
    private notificationServ : NotificationService,
    private userServ:UserService,
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.DetailsUser();
    this.GetNotificationList();
    this.GetListMails();
  }


  GetListMails() {
    this.mailServ.ListeMail().subscribe((m) => {
      this.mails = m;
      this.nbMsg = m.length;
    });
  }

  DetailsUser(){
    //id de l'utilisateur connecter
    this.userServ.ConsulterEmployee(6).subscribe((u) => {
      this.user =u;
      console.log(this.user);
    });
  }

  onLogout(){
    this.authService.logout();

  }

  GetNotificationList() {
    this.notificationServ.ListeNotification(6).subscribe((ListNotification) => {
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
