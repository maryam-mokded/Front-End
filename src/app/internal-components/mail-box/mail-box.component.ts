import { Component, OnInit } from '@angular/core';
import { Mail } from 'src/app/Models/mail';
import { User } from 'src/app/Models/user';
import { MailsService } from 'src/app/Services/mails.service';

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.css']
})
export class MailBoxComponent implements OnInit {

  test:boolean=true;
  mails? : Mail[];
  users? : User[];
  id?:number
  mailChecked: Mail=new Mail();

  constructor(
    private mailServ : MailsService,
  ) {}


  ngOnInit(): void {
    this.AfficherListMails();
  }


  AfficherListMails(){
    this.mailServ.ListeMail().subscribe(m =>{
      this.mails = m;
      this.mailChecked = this.mails[0]
      console.log(this.mails);
     });
  }

  AfficherDetailsMail(mail:Mail){
    this.mailServ.ConsulterMail(mail.id_Contact).subscribe((m: Mail) =>{
      this.mailChecked = m;
      console.log(this.mailChecked);
    });
  }

  SupprimerMail(mail:Mail){
    console.log(mail.id_Contact)
     this.mailServ.supprimerMail(mail.id_Contact).subscribe(()=>{
        console.log("Mail Supprimé !")
        window.location.reload();
      });
  }

}
