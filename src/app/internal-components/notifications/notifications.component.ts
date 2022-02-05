import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Notification } from 'src/app/Models/notification';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  
  notification!:Notification;

  constructor(
    private dialogClose: MatDialog,) { }

  ngOnInit(): void {
    this.DetailsNotification();
  }
  DetailsNotification(){
    this.notification =JSON.parse(localStorage.getItem('Notification') || '[]') || [];
    console.log(this.notification);  
  }

  closeDetails(){
    this.dialogClose.closeAll();
  }

  goToFormationList(){
    
  }

}
