import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  templateUrl: './app.dropdown.element.view.html'
})
export class DropDownElement implements OnInit {
  private _items: Array<any>;
  private enable:boolean;
  private jsonKeys:Array<any>;
  selectedValue: any;
  
  @Output()
  selectionChanged: EventEmitter<any>;
  constructor() {
    this._items = new Array<any>();
    this.jsonKeys = new Array<any>();
    this.selectedValue = '';
    this.selectionChanged = new EventEmitter<any>();
   }

   @Input()
   set items(value: Array<any>) {
     if(this.enable){
      for (const p of Object.keys(value[0])) {
        this.jsonKeys.push(p);
      }
     }
      this._items = value;     
   }
   get items(): Array<any> {
     return this._items;
   }
   @Input()
    set enableMultiColumn(value:boolean){
      this.enable = value;
    }
    get enableMultiColumn():boolean{
      return this.enable;
    }
  ngOnInit() { }
  onOptionChanged(): void {
    console.log(`Event inside the Angular Element ${this.selectedValue}`);
    this.selectionChanged.emit(this.selectedValue);
  }
}
