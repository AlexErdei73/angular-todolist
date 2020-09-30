import { ArrayWithActiveItem } from './arraywithactiveitem';
import { Project } from './project';

export class Projects extends ArrayWithActiveItem{
    constructor(title: string) {
        super(title);
      }
    
      new() {
        this.createItem();
      }
    
      createItem() {
        const project = new Project('');
        super.push(project);
        return project;
      }
}
