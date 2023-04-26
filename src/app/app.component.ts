import { NONE_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  tasks=[
    "Kiran Data",
  ]
  
  add(newTask:string){
    this.tasks.push(newTask)
  }

  remove(exisitingTask: string){
    var userConfirm = confirm(`Are you Do you want to remove the task \n "${exisitingTask}"`)
    if (userConfirm){
      this.tasks = this.tasks.filter(task=> task != exisitingTask)
    }
  }
}
