import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  taskList:string[]=[];


  // get all list of task
  getTasks():string[]{
    return this.taskList;
  }

  //for adding task in list
  addTask(taskItem:string):void{
    this.taskList.push(taskItem)
  }

  //for deleting task in the list
  deleteTask(indexOfTask:number):void{
    this.taskList.splice(indexOfTask,1)
  }
  constructor() { }
}
