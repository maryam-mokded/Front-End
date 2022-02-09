import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  test: boolean = true;
  EtatProfil: String = 'Profile';

  myForm!: FormGroup;
  user!: User;

  constructor(
    public authService: AuthService,
    private userServ: UserService
  ) {}

  ngOnInit(): void {
    this.authService.loadToken();
    // this.user =JSON.parse(localStorage.getItem('UserConnected') || '[]') || [];
    this.GetUserConnectedDetails();
    console.log(this.user)
    this.ValidatedForm();
  }


  GetUserConnectedDetails() {
    this.userServ
      .getUserConnectedDetails(this.authService.loggedUser)
      .subscribe((p) => {
        this.user = p;
     });
  }

  modifierProfil(user: User) {
    if (this.test == true) {
      this.test = false;
      this.EtatProfil = 'Editer';
    }
    this.userServ
    .modifierUserProfil(this.user.id_User,this.user)
    .subscribe(() => {
      console.log('User Modifier avec succees !');
      window.location.reload();
    });

  }

  ValidatedForm() {
    this.myForm = new FormGroup({
      nom: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ]),
      prenom: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ]),
      profession: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ]),
      matricule: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5),
      ]),
      adresse: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ]),
      cin: new FormControl(null, [
        Validators.required,
        Validators.pattern('[0-9]{8}'),
      ]),
      tel: new FormControl(null, [
        Validators.required,
        Validators.pattern('[0-9]{8}'),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      dateEmbauche: new FormControl(null, [Validators.required]),
      idDirection: new FormControl(null),
    });
  }
  get direction() {
    return this.myForm.get('idDirection');
  }
  get adresse() {
    return this.myForm.get('adresse');
  }

  get dateEmbauche() {
    return this.myForm.get('dateEmbauche');
  }

  get name() {
    return this.myForm.get('nom');
  }
  get matricule() {
    return this.myForm.get('matricule');
  }
  get prenom() {
    return this.myForm.get('prenom');
  }
  get email() {
    return this.myForm.get('email');
  }

  get cin() {
    return this.myForm.get('cin');
  }

  get profession() {
    return this.myForm.get('profession');
  }

  get tel() {
    return this.myForm.get('tel');
  }

}
