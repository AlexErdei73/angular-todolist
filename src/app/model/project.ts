import { ArrayWithActiveItem } from './arraywithactiveitem';
import { Todo } from './todo';

export class Project extends ArrayWithActiveItem{
    constructor(title: string) {
        super(title);
      }
    
      get dueDate() {
        return new Date(0);
      }
    
      new() {
        this.createItem();
      }
    
      createItem() {
        const todo = new Todo();
        this.push(todo);
        return todo;
      } 
}
