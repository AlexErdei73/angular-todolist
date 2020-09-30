export class ArrayWithActiveItem extends Array{
    private _active: number;
    constructor(private _title: string) {
        super();
        this._active = -1;
      }
    
      set title(text) {
        this._title = text;
      }
    
      get title() {
        return this._title;
      }
    
      get active() {
        return this._active;
      }
    
      set active(indexOfActive) {
        this._active = indexOfActive;
      }
    
      remove() {
        if (this.length > 0) {
          this.splice(this.active, 1);
          if (this.length <= this.active) {
            this.active = this.length - 1;
          }
        }
      }
    
      erase() {
        this.splice(0, this.length);
      }
}
