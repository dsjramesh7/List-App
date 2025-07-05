import { Injectable } from '@angular/core';

//blueprint like for task
export interface TaskStructure{
  title:string;
  done:boolean;
}


@Injectable({
  providedIn: 'root'
})



export class TaskService {
  constructor() { 
     this.loadFromLocalStorage(); 
  }

  taskList:TaskStructure[]=[];


  // get all list of task
  getTasks():TaskStructure[]{
    return this.taskList;
  }

  //for adding task in list
  addTask(title:string):void{
    const newTask:TaskStructure = {title,done:false};
    this.taskList.push(newTask)
    this.saveToLocalStorage();
  }

  //for deleting task in the list
  deleteTask(indexOfTask:number):void{
    this.taskList.splice(indexOfTask,1)
    this.saveToLocalStorage();
  }

  private saveToLocalStorage():void{
    localStorage.setItem("TasksHeading",JSON.stringify(this.taskList))
  }

  private loadFromLocalStorage():void{
    const gettingStoredData = localStorage.getItem("TasksHeading");
    if(gettingStoredData){
      this.taskList = JSON.parse(gettingStoredData);
    }
  }
}
