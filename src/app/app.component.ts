import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskModel } from '../model/task.model';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css']
})

export class AppComponent {
  public currentTask: string = '';
  public tasks: string[] = [];

  public addTask() {
    if (this.currentTask) {
      this.tasks.push(this.currentTask);
      this.currentTask = ''
    }
  }

  public deleteTask(index: number) {
    this.tasks.splice(index, 1)
  }

  public editTask(index: number) {
    let taskEdited = prompt('Edite a task', this.tasks[index])

    if (taskEdited) {
      this.tasks[index] = taskEdited
    }
  }
}


