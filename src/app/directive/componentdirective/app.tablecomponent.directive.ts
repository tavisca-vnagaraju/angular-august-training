import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabledirective-component',
  templateUrl: './app.tablecomponent.view.html'
})

export class TableDirectiveComponent implements OnInit {
  private dataSource: Array<any>;
  private initialised:Boolean = false;
  headers: Array<string>;
  @Output() // EventEmitter<T>, cass used to emit event with payload parameter as T
  notify: EventEmitter<any>;
  @Output() // EventEmitter<T>, cass used to emit event with payload parameter as T
  deleteRecord: EventEmitter<any>;
  constructor() {
    this.dataSource = new Array<any>();
    this.headers = new Array<string>();
    this.notify = new EventEmitter<any>();
    this.deleteRecord = new EventEmitter<any>();
  }

  ngOnInit():void {
    this.initialised = true;
   }

  // parent will be able to use datasourve property for
  // property binding
  @Input()
  set DataSource(val: Array<any>) {
    if (val.length > 0) {
      this.dataSource = val;
      if(this.initialised){
        // generate headers from the first record of the array
        for (const p of Object.keys(this.dataSource[0])) {
          this.headers.push(p);
        }
        this.initialised = false;
      }
    } else {
      this.dataSource = new Array<any>();
    }
  }
  get DataSource(): Array<any> {
    return this.dataSource;
  }
  @Input()
  isDelete:Boolean;
  

  rowClick(rec: any): void {
    // the emit will pass the data to parent
    // parent must subscribe to the event using
    // event binding and  read data
    this.notify.emit(rec);
  }
  onDelete(rec:any):void{
    this.deleteRecord.emit(rec);
  }
}
