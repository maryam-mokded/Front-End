import { Component, OnInit ,HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Image1:number=1;
  LienCard:String="";
  idImage:String="slide-dot-1";
  counter: number = 0;
  intervalId?: any;
  SrcImage:String="../../../assets/ImageAccueil/offres-emploi-domicile.jpg";

  navbarfixed:boolean = false;

  @HostListener('window:scroll',['$event']) onscroll(){
    if(window.scrollY > 450)
    {
      this.navbarfixed = true;
    }
    else
    {
      this.navbarfixed = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.ChangerImageCard();
  }

  AfficheImage1(){
    this.SrcImage = "../../../assets/ImageAccueil/jobOffer.png";
    this.idImage ="slide-dot-1"
    this.LienCard = "Image1"
  }
  AfficheImage2(){
    this.SrcImage ="../../../assets/ImageAccueil/resultat.gif";
    this.idImage ="slide-dot-2"
    this.LienCard = "Image2"
  }
  AfficheImage3(){
    this.SrcImage ="../../../assets/ImageAccueil/press.png";
    this.idImage ="slide-dot-3"
    this.LienCard = "Image3"
  }

  ChangerImageCard() {
    this.intervalId = setInterval(() => {
      this.counter = this.counter + 1;
      console.log(this.counter);
      if (this.counter == 1) {
       this.SrcImage = "../../../assets/ImageAccueil/jobOffer.png";
       this.idImage ="slide-dot-1"
       this.LienCard = "Image1"
      } else if (this.counter == 6) {
        this.SrcImage ="../../../assets/ImageAccueil/resultat.gif";
        this.idImage ="slide-dot-2"
        this.LienCard = "Image2"
      } else if (this.counter == 12) {
        this.SrcImage ="../../../assets/ImageAccueil/press.png";
        this.idImage ="slide-dot-3"
        this.LienCard = "Image3"
      }
      if (this.counter === 18) {
         this.counter = 0;
        // clearInterval(this.intervalId);
     }
    }, 1000);

  }

}
