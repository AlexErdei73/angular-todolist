import { Projects } from './../model/projects';
import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project';
import { todos } from '../sampletodos';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public allProjects = new Projects('allProjects');
  public activeProject: Project;
  
  constructor() { }

  ngOnInit(): void {
    const sampleProject = this.allProjects.createItem();
    sampleProject.title = 'ToDoList';
    todos.forEach(item => {
        sampleProject.push(item);
    });
    sampleProject.active = 0;
    this.allProjects.active = 0;
    this.activeProject = this.allProjects[this.allProjects.active];
  }

  onMouseClick(index: number) {
    this.allProjects.active = index;
    this.activeProject = this.allProjects[index];
  }

  onClickDelete() {
    this.allProjects.remove();
    this.onMouseClick(this.allProjects.active);
  }

  onClickNew() {
    this.allProjects.new();
    const active = this.allProjects.length - 1;
    this.onMouseClick(active);
  }
}
