import { Projects } from './../model/projects';
import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../model/project';
import { Todo } from '../model/todo';
import { todos } from '../sampletodos';
import { storage } from '../storage/storage';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() public project = new Project('');
  @Input() public projects: Projects;
  @Input() public activeTodo: Todo;
  
  constructor() { }

  ngOnInit(): void {
    const active = this.project.active;
    this.onMouseClick(active);
  }

  onMouseClick(index: number) {
    this.project.active = index;
    this.activeTodo = this.project[index];
    this.save();
  }

  onClickDelete() {
    this.project.remove();
    this.onMouseClick(this.project.active);
    this.save();
  }

  onClickNew() {
    this.project.new();
    const active = this.project.length - 1;
    this.onMouseClick(active);
    this.activeTodo.priority = 'low';
    this.save();
  }

  onChangeTitle(e) {
    const inputTitle = e.target;
    this.project.title = inputTitle.value;
  }

  save(){
    storage.save('', this.projects);
  }

}
