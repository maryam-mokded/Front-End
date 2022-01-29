import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  test: boolean = true;
  EtatProfil:String="Profile"
  constructor() {}

  ngOnInit(): void {}

  modifierProfil() {
    if (this.test == true) {
      this.test = false;
      this.EtatProfil = "Editer"
    } else {
      this.test = true;
      this.EtatProfil = "Profile"
    }
  }
}
