import { Component, OnInit } from '@angular/core';
import { Task } from './../task'; 

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})


export class CategoryComponent implements OnInit {

  categorisedTasks: Task[] = [
    {taskID: 1, taskField: 'Clean'},
    {taskID: 2, taskField: 'Wipe'}
  ]
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
      taskCate: taskData.taskCate
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
    this.onDeletedTask(TaskData);//delete it from the array 
  }

}
