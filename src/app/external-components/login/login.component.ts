import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user =new User();
err:number=0;

  constructor(private authService: AuthService, public router:Router ) { }


  ngOnInit () {
    // this.authService.loadToken();
    // if (this.authService.getToken()==null ||
    //     this.authService.isTokenExpired())
    //       this.router.navigate(['/']);
  }

  onLoggedin()
  {
    this.authService.login(this.user).subscribe((data)=> {
      let jwToken : any   = data.headers.get('Authorization');
      this.authService.saveToken(jwToken);

      if(this.authService.isAdmin()){
        this.router.navigate(['/inter/dashboard']);
      }
      else{
        this.router.navigate(['/inter/profile']);
      }
      //this.router.navigate(['/']);
       //this.router.navigate(['/employees/admin/employeesList']);
    },(err)=>{   this.err = 1;
});

 }

  mdp = "password"
  myFunction() {
   if (this.mdp === "password") {
     this.mdp = "text";
   } else {
     this.mdp = "password";
   }
 }



}
