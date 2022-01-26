import { Component, OnInit ,HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  LienCard:String="";
  idImage:String="slide-dot-1";
  counter: number = 0;
  intervalId?: any;
  SrcImage:String="../../../assets/ImageAccueil/offres-emploi-domicile.jpg";

  navbarfixed:boolean = false;

  @HostListener('window:scroll',['$event']) onscroll(){
    if(window.scrollY > 100)
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
    this.LienCard = "Tender notice N°04/2022 “Acquisition of a carbon and sulfur analyzer”"
  }
  AfficheImage2(){
    this.SrcImage ="../../../assets/ImageAccueil/resultat.gif";
    this.idImage ="slide-dot-2"
    this.LienCard = "Preliminary list of candidates (Masters) selected after the oral and psychotechnical examination of the recruitment competition for the year 2019"
  }
  AfficheImage3(){
    this.SrcImage ="../../../assets/ImageAccueil/press.png";
    this.idImage ="slide-dot-3"
    this.LienCard = "Press release of 28/12/2010"
  }

  ChangerImageCard() {
    this.intervalId = setInterval(() => {
      this.counter = this.counter + 1;
      console.log(this.counter);
      if (this.counter == 1) {
       this.SrcImage = "../../../assets/ImageAccueil/jobOffer.png";
       this.idImage ="slide-dot-1"
       this.LienCard = "Tender notice N°04/2022 “Acquisition of a carbon and sulfur analyzer”"

      } else if (this.counter == 6) {
        this.SrcImage ="../../../assets/ImageAccueil/resultat.gif";
        this.idImage ="slide-dot-2"
        this.LienCard = "Preliminary list of candidates (Masters) selected after the oral and psychotechnical examination of the recruitment competition for the year 2019"
      } else if (this.counter == 12) {
        this.SrcImage ="../../../assets/ImageAccueil/press.png";
        this.idImage ="slide-dot-3"
        this.LienCard = "Press release of 28/12/2010"
      }
      if (this.counter === 18) {
         this.counter = 0;
        // clearInterval(this.intervalId);
     }
    }, 1000);

  }

}
