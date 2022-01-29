import { Component, OnInit } from '@angular/core';
import { Mail } from 'src/app/Models/mail';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.css']
})
export class MailBoxComponent implements OnInit {

  test:boolean=true;
  mails? : Mail[];
  users? : User[];
  mailChecked?: Mail;

  constructor() {

   }

  ngOnInit(): void {

    this.users = [
      {"id_user":1,"nom":"Ben Taleb","prenom":"Ahmed","email":"BenTalebAhmed@gamil.com"},
      {"id_user":2,"nom":"Melki","prenom":"Manar","email":"HannibalMejebri@gamil.com"},
      {"id_user":3,"nom":"Malouli","prenom":"Mohamed","email":"MohamedMallouli@gamil.com"},
      {"id_user":4,"nom":"Melki","prenom":"Amira","email":"MelkiAmira@gamil.com"},
      {"id_user":5,"nom":"Mokded","prenom":"Maryam","email":"mokded.maryam28@gamil.com"},
      {"id_user":6,"nom":"Ben Jemaa","prenom":"Hanin","email":"BenJemaaHanin@gamil.com"},
      {"id_user":7,"nom":"Thamlaoui","prenom":"Achref","email":"ThamlaouiAchref@gamil.com"},
      {"id_user":8,"nom":"Mokded","prenom":"Syrine","email":"mokdedSyrine@gamil.com"},
      {"id_user":9,"nom":"Ayari","prenom":"Dorra","email":"DorraAyari@gamil.com"},
      {"id_user":10,"nom":"Ben Salha","prenom":"Ilhem","email":"BenSalhailhem@gamil.com"},
      {"id_user":11,"nom":"Ben Saber","prenom":"Ahmed","email":"BenSaberAhmed@gamil.com"}
    ];

    this.mails = [
      {"id_mail":1,"date":new Date("2022-01-22 16:47:17.433000"),"message": this.users[0].prenom + " I am writing to you following the sending of my email below. I haven't had any feedback from your team so far. If you are still interested in discussing with me, do not hesitate to let me know your availability.","user":this.users[0]},
      {"id_mail":2,"date":new Date("2022-02-01 18:45:05.433000"),"message": this.users[1].prenom + "I am writing to you following the sending of my email below. I haven't had any feedback from your team so far. If you are still interested in discussing with me, do not hesitate to let me know your availability.","user":this.users[1]},
      {"id_mail":3,"date":new Date("2022-11-05 08:40:04.433000"),"message": this.users[2].prenom + "I am writing to you following the sending of my email below. I haven't had any feedback from your team so far. If you are still interested in discussing with me, do not hesitate to let me know your availability.","user":this.users[2]},
      {"id_mail":4,"date":new Date("2022-12-10 10:30:03.433000"),"message": this.users[3].prenom + "I am writing to you following the sending of my email below. I haven't had any feedback from your team so far. If you are still interested in discussing with me, do not hesitate to let me know your availability.","user":this.users[3]},
      {"id_mail":5,"date":new Date("2022-09-18 12:13:08.433000"),"message": this.users[4].prenom + "I am writing to you following the sending of my email below. I haven't had any feedback from your team so far. If you are still interested in discussing with me, do not hesitate to let me know your availability.","user":this.users[4]},
      {"id_mail":6,"date":new Date("2022-06-28 14:17:18.433000"),"message": this.users[5].prenom + "I am writing to you following the sending of my email below. I haven't had any feedback from your team so far. If you are still interested in discussing with me, do not hesitate to let me know your availability.","user":this.users[5]},
      {"id_mail":7,"date":new Date("2022-05-16 10:10:20.433000"),"message": this.users[6].prenom + "I am writing to you following the sending of my email below. I haven't had any feedback from your team so far. If you are still interested in discussing with me, do not hesitate to let me know your availability.","user":this.users[6]},
      {"id_mail":8,"date":new Date("2022-10-17 15:07:29.433000"),"message": this.users[7].prenom + "I am writing to you following the sending of my email below. I haven't had any feedback from your team so far. If you are still interested in discussing with me, do not hesitate to let me know your availability.","user":this.users[7]},
      {"id_mail":9,"date":new Date("2022-08-20 12:08:04.433000"),"message": this.users[8].prenom + "I am writing to you following the sending of my email below. I haven't had any feedback from your team so far. If you are still interested in discussing with me, do not hesitate to let me know your availability.","user":this.users[8]},
      {"id_mail":10,"date":new Date("2022-05-08 10:20:07.433000"),"message": this.users[9].prenom + "I am writing to you following the sending of my email below. I haven't had any feedback from your team so far. If you are still interested in discussing with me, do not hesitate to let me know your availability.","user":this.users[9]},
      {"id_mail":11,"date":new Date("2022-12-18 17:15:10.433000"),"message": this.users[10].prenom + "I am writing to you following the sending of my email below. I haven't had any feedback from your team so far. If you are still interested in discussing with me, do not hesitate to let me know your availability.","user":this.users[10]},
    ];


    this.test = true
    this.mailChecked = this.mails[0]

  }


  AfficherDetailsMail(mail:Mail){
    this.test = false;
    this.mailChecked = mail;
  }

}
