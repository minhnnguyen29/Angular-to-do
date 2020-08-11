import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  logAddedTask(taskID: number, taskField: string){
    console.log(`A new task ID: ${taskID} to ${taskField} has been added.`);
  }

}
