import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiSeriesService {

  constructor(private url:HttpClient) { }
  getChatacters(){
    return this.url.get('https://rickandmortyapi.com/api/character');
  }
}
