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
  chosenTask: Task; 
  constructor() { }
  ngOnInit(): void {

  }
  onSelect(task: Task): void{
  }

  whatNext(){
    console.log("Show <app-newtask>");
  }

}
