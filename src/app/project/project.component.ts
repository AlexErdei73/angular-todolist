import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../model/project';
import { Todo } from '../model/todo';
import { todos } from '../sampletodos';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() public project = new Project('');
  public activeTodo: Todo;
  
  constructor() { }

  ngOnInit(): void {
    const active = this.project.active;
    this.onMouseClick(active);
  }

  onMouseClick(index: number) {
    this.project.active = index;
    this.activeTodo = this.project[index];
  }

  onClickDelete() {
    this.project.remove();
    this.onMouseClick(this.project.active);
  }

  onClickNew() {
    this.project.new();
    const active = this.project.length - 1;
    this.onMouseClick(active);
    this.activeTodo.priority = 'low';
  }

  onChangeTitle(e) {
    const inputTitle = e.target;
    this.project.title = inputTitle.value;
  }
}
