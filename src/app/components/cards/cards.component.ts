import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  public toyStory:String;
  public moana:String;
  public brave:String;
  constructor() {
    this.toyStory="/../../assets/img/toyStory4.jpg";
    this.moana="/../../assets/img/moana.jpg";
    this.brave="/../../assets/img/brave.jpg";
   }

  ngOnInit(): void {
  }

}
