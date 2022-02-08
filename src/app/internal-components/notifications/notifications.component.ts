import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Notification } from 'src/app/Models/notification';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/Services/notification.service';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notification!:Notification;

  constructor(
    public authService: AuthService,
    private dialogClose: MatDialog,
    private notifictionServ : NotificationService,
    public router: Router) { }

  ngOnInit(): void {
    this.DetailsNotification();
  }

  DetailsNotification(){
    this.notification =JSON.parse(localStorage.getItem('Notification') || '[]') || [];
    console.log(this.notification);  
  }

  AjouterFormation(){
    // this.notifictionServ.supprimerNotification(this.notification.id_Notification).subscribe(()=>{
    //   console.log("Notification Supprimé !")
    //  });
    this.router.navigate(['/inter/formations-list']);
    this.closeDetails();
  }

  closeDetails(){
    this.dialogClose.closeAll();
  }

}
