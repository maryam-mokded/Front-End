import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  counter: number = 0;
  ShowImgCim: boolean = false;
  ShowImgLoc: boolean = false;
  ShowDescription: boolean = false;
  intervalId?: any;

  constructor() {}

  ngOnInit(): void {
    this.counter = 0;
    this.ShowImgCim = true;
    this.ShowImgLoc = false;
    this.ShowDescription = false;
    this.ShowElements();
  }

  ShowElements() {
    this.intervalId = setInterval(() => {
      this.counter = this.counter + 1;
      console.log(this.counter);
      if (this.counter == 1) {
        this.ShowDescription = false;
        this.ShowImgCim = true;
        this.ShowImgLoc = false;
      } else if (this.counter == 6) {
        this.ShowDescription = true;
        this.ShowImgCim = false;
        this.ShowImgLoc = false;
      } else if (this.counter == 12) {
        this.ShowDescription = false;
        this.ShowImgCim = false;
        this.ShowImgLoc = true;
      }
      if (this.counter === 18) {
         this.counter = 0;
        // clearInterval(this.intervalId);
     }
    }, 1000);

  }
}
