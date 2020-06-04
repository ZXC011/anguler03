import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SerService {
  srt:any;
  constructor() { }

  get(){
    return this.srt;
  }
  set(srt){
    this.srt=srt;
  }
}
