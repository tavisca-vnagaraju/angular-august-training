import {Component} from '@angular/core';

@Component({
    selector :"app-calculator-component",
    templateUrl:"./calculator-component.html",
    styleUrls:["./calculator-component.css"]
})

export class CalculatorComponent{
    result:string;
    buttonValue:string;
    leftNumber:string;
    rightNumber:string;
    operator:string;
    calcButtons:Array<string>;
    
    constructor(){
        this.result = "";
        this.buttonValue = "";
        this.leftNumber = "";
        this.rightNumber = "";
        this.operator = "";
        this.calcButtons = [ 
                                "1","2","3","+","4","5","6","-","7","8",
                                "9", "*", "C", "0" , "=" , "/"
                           ];
    }
    
    getButtonValue(event):void{
        this.buttonValue= event.target.value;
        if( !isNaN(parseFloat(this.buttonValue)) && this.operator == ""){
            this.leftNumber += this.buttonValue;
        }else if(isNaN(parseFloat(this.buttonValue))){
            if(this.buttonValue == "="){
                this.doOperation();
            }else if(this.buttonValue == "C"){
                this.clear();
            }else{
                this.operator = this.buttonValue;
            }
        }else if(this.operator != ""){
            this.rightNumber += this.buttonValue;
        }
    }
    clear() {
        this.result = "";
        this.buttonValue = "";
        this.leftNumber = "";
        this.rightNumber = "";
        this.operator = "";
    }
    doOperation(){
        switch (this.operator) {
            case "+":
                this.result = " = " + (Number(this.leftNumber) + Number(this.rightNumber)).toString();
                break;
            case "-":
                this.result = " = " + (Number(this.leftNumber) - Number(this.rightNumber)).toString();
                break;
            case "*":
                this.result = " = " + (Number(this.leftNumber) * Number(this.rightNumber)).toString();
                break;
            case "/":
                this.result = " = " + (Number(this.leftNumber) / Number(this.rightNumber)).toString();
                break;
            default:
                break;
        }
    }
}