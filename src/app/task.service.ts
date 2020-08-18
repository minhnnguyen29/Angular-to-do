
import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Observable } from 'rxjs'; 
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  /*
  private emitNewTask = new Subject<Task>(); 

  changeEmitted = this.emitNewTask.asObservable(); //Observable String streams 

  onEmitNewTask(newTask: Task){
    this.emitNewTask.next(newTask);
  }
  */

  //get new Task 
  newTask = new EventEmitter<Task>(); 

  private categorisedTasks: Task[] = [
    {taskID: 1, taskField: 'Clean', taskStatus: 'To-Do'},
    {taskID: 2, taskField: 'Wipe', taskStatus: 'To-Do'}
  ]

  getTasks(){
    return this.categorisedTasks.slice();
  }

  onAddTask(taskField: string, taskCate: string, deadline: Date){
    this.categorisedTasks.slice();
  }
 
  onCompleteTask(){
    
  }

}
