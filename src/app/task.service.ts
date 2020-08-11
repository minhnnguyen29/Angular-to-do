import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  idProvider = new EventEmitter(); //provide id for each task 
  constructor() { }

  getIncrementedID(id: number){
    return id;
  }

}
