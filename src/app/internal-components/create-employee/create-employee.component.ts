import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DirectionService } from 'src/app/Services/direction.service';
import { Direction } from 'src/app/Models/direction';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {


  idDirection:number = 1;
  user:User = new User();
  direction!:Direction[];
  myForm!:FormGroup;

  constructor(
    private dialogClose: MatDialog,
    private directionServ : DirectionService,
    private userServ:UserService,
  ) { }

  ngOnInit(): void {
    this.GetDirectionList();
    this.ValidatedForm();
  }

  ValidatedForm(){
    this.myForm = new FormGroup({
      'nom' : new FormControl(null,[Validators.required, Validators.minLength(2),Validators.maxLength(30)]),
      'prenom' : new FormControl(null,[Validators.required, Validators.minLength(2),Validators.maxLength(30)]),
      'profession' : new FormControl(null,[Validators.required, Validators.minLength(2),Validators.maxLength(30)]),
      'matricule' : new FormControl(null,[Validators.required, Validators.minLength(5),Validators.maxLength(5)]),
      'cin' : new FormControl(null,[Validators.required , Validators.pattern("[0-9]{8}")]),
      'tel' : new FormControl(null,[Validators.required,Validators.pattern("[0-9]{8}")]),
      'email' : new FormControl(null, [Validators.required,Validators.email]),
      'dateEmbauche' : new FormControl(null, [Validators.required]),
      'idDirection' : new FormControl(null),

    });
  }
  get Direction(){
    return this.myForm.get('idDirection') ;
  }

  get dateEmbauche(){
    return this.myForm.get('dateEmbauche') ;
  }

  get name(){
    return this.myForm.get('nom') ;
  }
  get matricule(){
    return this.myForm.get('matricule') ;
  }
  get prenom(){
    return this.myForm.get('prenom') ;
  }
  get email(){
    return this.myForm.get('email') ;
  }

  get cin(){
    return this.myForm.get('cin') ;
  }

  get profession(){
    return this.myForm.get('profession') ;
  }

  get tel(){
    return this.myForm.get('tel') ;
  }

  GetDirectionList(){
    this.directionServ.ListeDirection().subscribe(d =>{
      this.direction = d;
      console.log(this.direction);
     });
  }




  AddEmployee(){
    this.userServ.AjouterEmployee(this.idDirection,this.user).subscribe(empl =>{
      console.log("Employee Ajouter avec succees !")
      console.log(empl);
      window.location.reload()
    })
  }


  onClose() {
    this.dialogClose.closeAll();
  }

}
