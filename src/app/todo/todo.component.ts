import { Todo } from './../model/todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public todo: Todo = new Todo();
  public dateString: string;
  
  constructor() {}

  ngOnInit(): void {
    this.todo.title = 'ToDo Object';
    this.todo.description = 
      `We make a todo object, which stores the data of the todo.`;
    this.todo.dueDate = new Date('2020-09-30');
    this.dateString = 
      this.todo.dueDate.toISOString().slice(0, 10);
    console.log(this.dateString);
    this.todo.priority = 'high';
    this.todo.notes = [ 'This is the first Angular version' ];
  }

  onChangeTitle(e) {
    const inputTitle = e.target;
    this.todo.title = inputTitle.value;
  }

  onChangeDescription(e) {
    const textAreaDescription = e.target;
    this.todo.description = textAreaDescription.value;
  }

  onChangeDate(e) {
    const inputDate = e.target;
    this.todo.dueDate = inputDate.value;
  }

  onChangePriority(e) {
    const selectPriority = e.target;
    this.todo.priority = selectPriority.value;
  }

  onChangeNotes(e) {
    const textAreaNotes = e.target;
    this.todo.notes = textAreaNotes.value.split('\n');
  }
}
