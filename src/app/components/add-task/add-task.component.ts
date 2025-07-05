import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  //code here
  public task:string = "";
  public addTaskFunc():void{
    if(this.task.trim()){
      this.taskService.addTask(this.task)
      this.task = "";
    }
  }
}
