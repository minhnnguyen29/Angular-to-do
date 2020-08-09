import { Component, OnInit } from '@angular/core';
import { Task } from './../task'; 

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})


export class CategoryComponent implements OnInit {

  categorisedTasks: Task[] = [
    {taskID: 1, taskField: 'Clean', taskStatus: 'To-Do'},
    {taskID: 2, taskField: 'Wipe', taskStatus: 'To-Do'}
  ]

  completedTasks: Task[] = [

  ]; 
  newID: number = 1; 
  constructor() { }
  ngOnInit(): void {

  }

  getNewID() {
    if(this.categorisedTasks.length > 0){
      this.newID = this.categorisedTasks[this.categorisedTasks.length - 1].taskID + 1;
    }
  }

  onAddedTask(taskData: Task){
    this.categorisedTasks.push({
      taskID: taskData.taskID, 
      taskField: taskData.taskField, 
      deadline: taskData.deadline, 
      taskCate: taskData.taskCate, 
      taskStatus: taskData.taskStatus
    })
    console.log(taskData);
  }

  onDeletedTask(TaskData: Task){
    let ids, index; 
    //get ids of all tasks 
    ids = this.categorisedTasks.map(function(curr){
      return curr.taskID; 
    });

    index = ids.indexOf(TaskData.taskID);//get index of the task that has that task ID 
    if(index !== -1){
      this.categorisedTasks.splice(index, 1);//remove the task that has that id
    }
  }

  onCompletedTask(TaskData: Task){
    console.log(TaskData);
    this.completedTasks.push({
      taskID: TaskData.taskID, 
      taskField: TaskData.taskField, 
      taskCate: TaskData.taskCate,
      deadline: TaskData.deadline, 
      taskStatus: 'Done'
    });
    console.log(this.completedTasks); 

    this.onDeletedTask(TaskData);//delete it from the array 
  }

}
