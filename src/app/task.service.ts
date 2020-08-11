
import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Observable } from 'rxjs'; 
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  private emitNewTask = new Subject<Task>(); 

  changeEmitted = this.emitNewTask.asObservable(); //Observable String streams 

  onEmitNewTask(newTask: Task){
    this.emitNewTask.next(newTask);
  }



}
