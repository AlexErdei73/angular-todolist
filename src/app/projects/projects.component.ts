import { Projects } from './../model/projects';
import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project';
import { todos } from '../sampletodos';
import { storage } from '../storage/storage';

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
    if (localStorage.getItem('.length')) this.load()
      else this.save();
    const active = this.allProjects.active;
    this.activeProject = this.allProjects[active];
  }

  onMouseClick(index: number) {
    this.allProjects.active = index;
    this.activeProject = this.allProjects[index];
    this.save();
  }

  onClickDelete() {
    this.allProjects.remove();
    this.onMouseClick(this.allProjects.active);
    this.save();
  }

  onClickNew() {
    this.allProjects.new();
    const active = this.allProjects.length - 1;
    this.onMouseClick(active);
    this.save();
  }

  save(){
    storage.save('', this.allProjects);
  }

  load(){
    storage.load('', this.allProjects);
  }
}
