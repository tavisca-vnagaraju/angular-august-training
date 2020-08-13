import {AbstractControl} from '@angular/forms';
import {Product} from "./../../model/app.product.model";
import {Logic} from './../../model/logic';

export class DuplicateProductValidator{
    
    static checkDuplicateProduct(control: AbstractControl):any{
        let products: Array<Product>;
        let logic: Logic;
        const value = control.value;
        products = new Array<Product>();
        logic = new Logic();
        products  =  logic.getProducts();
        
        for(let i=0;i<products.length;i++){
          if(value==products[i].ProductId)
            return {Duplicate: false}
     
        }
        return null;
    }
}