import { LeadingComment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { number } from 'echarts';
import { Mail } from 'src/app/Models/mail';
import { MailsService } from 'src/app/Services/mails.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  mail:Mail=new Mail();

  myForm!:FormGroup;

  constructor(
   private mailServ : MailsService,
  ) { }

  ngOnInit(): void {
    this.ValidatedForm()
   }

  SendMail(){
    this.mail.id_Contact = 0 ;
    this.mailServ.AjouterMail(this.mail).subscribe(m =>{
      console.log("mail Ajouter avec succees !")
      window.location.reload()
    })
  }


  ValidatedForm(){
    this.myForm = new FormGroup({
      'nom' : new FormControl(null,[Validators.required, Validators.minLength(2),Validators.maxLength(15)]),
      'message' : new FormControl(null,[Validators.required, Validators.minLength(2),Validators.maxLength(50)]),
      'email' : new FormControl(null, [Validators.required,Validators.email]),
    });
  }


  get nom(){
    return this.myForm.get('nom') ;
  }
  get email(){
    return this.myForm.get('email') ;
  }
  get message(){
    return this.myForm.get('message') ;
  }
}
