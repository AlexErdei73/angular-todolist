import { Todo } from './../model/todo';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() public todo = new Todo();
  
  constructor() {}

  ngOnInit(): void {
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
    if (!inputDate.value) {
      this.todo.dueDate = new Date(0);
    } else {
      this.todo.dueDate = new Date(inputDate.value);
    }
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
