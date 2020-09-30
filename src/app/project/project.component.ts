import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project';
import { Todo } from '../model/todo';
import { todos } from '../sampletodos';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  public project = new Project('ToDo List');
  public activeTodo: Todo;
  
  constructor() { }

  ngOnInit(): void {
    todos.forEach(todo => this.project.push(todo));
    this.project.active = -1;
  }

  onMouseClick(index: number) {
    this.project.active = index;
    this.activeTodo = this.project[index];
  }

}
