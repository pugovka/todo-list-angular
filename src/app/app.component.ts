import { Component } from '@angular/core';
import Task from './task';
import '../assets/css/styles.css';

@Component({
  selector: 'pugovka-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ToDo list';
}
