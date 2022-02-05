import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/Services/notification.service';
import { Notification } from 'src/app/Models/notification';
import { NotificationsComponent } from 'src/app/internal-components/notifications/notifications.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';


@Component({
  selector: 'app-navbar-internal',
  templateUrl: './navbar-internal.component.html',
  styleUrls: ['./navbar-internal.component.css']
})
export class NavbarInternalComponent implements OnInit {

  NotificationList!: Notification[];
  nbNotif!:number;

  constructor(
    private dialog: MatDialog,
    private notificationServ : NotificationService,
  ) { }

  ngOnInit(): void {
    this.GetNotificationList();
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
