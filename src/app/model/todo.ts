export class Todo {
    private _dueDate: Date;
    private _notes: Array<string>;
    private _priority: string;

    constructor(private _title: string = '',
        private _description: string = ''){
        this._dueDate = new Date(0);
        this._notes = [];
    }

    set title(title: string) {
        this._title = title;
    }
    
    get title() {
        return this._title;
    }

    set description(text: string) {
        this._description = text;
    }
    
    get description() {
        return this._description;
    }

    set dueDate(date: Date) {
        this._dueDate = date;
    }
    
    get dueDate() {
        return this._dueDate;
    }

    set priority(text: string) {
        this._priority = text;
    }
    
    get priority() {
        return this._priority;
    }

    set notes(arrayOfText: Array<string>) {
        this._notes = arrayOfText;
    }
    
    get notes() {
        return this._notes;
    }

    get dateString() {
        return this.dueDate.toISOString().slice(0, 10);
    }

}
