import { Component } from '@angular/core';
import Task from './task';

@Component({
  selector: 'tasks-list',
  templateUrl: './tasks-list.component.html'
})

export class TasksListComponent {
  tasks = [
    new Task(1, 'Feed the Cat', 'Meat will do'),
    new Task(2, 'Play the Dragonage'),
    new Task(3, 'Read about angular')
  ];
  id = 4;

  addTask(newTaskTitle: string) {
    if (newTaskTitle) {
      const newTask = new Task(this.id++, newTaskTitle);
      this.tasks.push(newTask);
    }
  }
}
