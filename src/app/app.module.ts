import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TasksListComponent } from './tasks-list.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent,
    TasksListComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
