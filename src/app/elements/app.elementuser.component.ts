import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elementuser-component',
  template: `
    <h2>Using Angular Element</h2>
    <div>
      <strong>
        The Value received from Element {{receivedValue}}
      </strong>
    </div>
    <dropdown-element [items]="data" on-selectionChanged="onSelectionChanged($event)"></dropdown-element>
    <dropdown-element  [enableMultiColumn]="true" [items]="jsonData" on-selectionChanged="onSelectionChanged($event)" ></dropdown-element>
  `
})

export class ElementUserComponent implements OnInit {
  data: Array<string>;
  receivedValue: string;
  jsonData:Array<any>;
  constructor() {
    this.data = new Array<string>();
    this.data.push('A');
    this.data.push('B');
    this.data.push('C');
    this.receivedValue = '';
    this.jsonData = 
    [
      { id: 1 , name : "apple" , type: "fruit"},
      { id: 2 , name : "tomato" , type: "fruit"},
      { id: 3 , name : "orange" , type: "color"},
      { id: 4 , name : "red" , type: "color"}
    ];


  }

  onSelectionChanged(event): void {
    // read the received data from the custom element
    // the event.details will provide the emitted data from
    // Angular Component
    this.receivedValue = event.detail;
  }

  ngOnInit() { }
}
