import { Component, OnInit } from '@angular/core';
import {ApiSeriesService} from '.././../api-series.service';
import{Character} from '.././../interfaz';
@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit,Character {
public id:1;
public name:"pedro";
public personajes:Array<any>=[];
  constructor(private api:ApiSeriesService) { }

  ngOnInit(){
    this.api.getChatacters().subscribe((data)=>{
      console.log('Api episodios',data['results']);
      this.personajes=data['results'];

    })
  }







}
