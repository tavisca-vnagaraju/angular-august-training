import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Product} from '../../model/app.product.model';
import {Logic} from '../../model/logic';
import {Manufacturers, Categories} from '../../model/app.constants';
import {CustomValidator} from './app.custom.validator';
import { DuplicateProductValidator } from './app.duplicateProduct.validator';
import {HttpService} from './../../services/app.httpservvice.service';

@Component({
  selector: 'app-productreactiveform-component',
  templateUrl: './app.productreactiveform.view.html'
})
// OnInit: Angular Component's lifecycle interface
export class ProductReactiveFormComponent implements OnInit {
  product: Product;
  products: Array<Product>;
  categories = Categories;
  manufacturers = Manufacturers;
  private logic: Logic;
  columnHeaders: Array<string>;
  message: string;

  // define FormGroup instance
  frmProduct: FormGroup;
  constructor(private serv: HttpService) {
    this.product = new Product(0, '', '', '', '', '', 0);
    this.products = new Array<Product>();
    this.logic = new Logic();
    this.columnHeaders = new Array<string>();
    this.message = '';

    // create an instance of FormGroup and bind Product Model to it
    // using FormControl class that accepts the Public property of Model class
    // formGroup instance will be bind with [formGroup] property of <form></form>
    // The key of FormControl will be bound with 'formControlName' of editable element
    this.frmProduct = new FormGroup({
       ProductRowId : new FormControl(this.product.ProductRowId,
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(5),
          Validators.pattern('[0-9]*'),
          CustomValidator.CheckEven
        ])),
       ProductId : new FormControl(this.product.ProductId,
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(10),
          DuplicateProductValidator.checkDuplicateProduct
        ])),
       ProductName : new FormControl(this.product.ProductName,
        Validators.compose([
          Validators.required,
          Validators.pattern('[a-zA-Z0-9]*'),
          
        ])),
       CategoryName : new FormControl(this.product.CategoryName),
       Manufacturer : new FormControl(this.product.Manufacturer),
       Description : new FormControl(this.product.Description,
        Validators.compose([
        Validators.required,Validators.maxLength(50)
        ])),
       BasePrice : new FormControl(this.product.BasePrice,
        Validators.compose([
          Validators.required,
          Validators.min(0),      
        ]))
    });


  }


  ngOnInit(): void {
    //this.products  =  this.logic.getProducts();
    this.serv.getData().subscribe((resp) => {
      this.products = resp;
      this.message = `Data Received Successfully`;
    }, (error) => {
      this.message = `Error Occured ${error}`;
    });
    // read properties from product object
    for (const p of Object.keys(this.product)) {
      this.columnHeaders.push(p);
    }

  }
  clear(): void {
    this.product = new Product(0, '', '', '', '', '', 0);
    // pass the empty product to the value of FormGroup
    this.frmProduct.setValue(this.product);
  }
  save(): void {
    // read the value posted from the FromGroup
    this.product = this.frmProduct.value;
    //this.products = this.logic.addProduct(this.product);
    this.serv.postData(this.product).subscribe((resp) => {
      if(resp != null){
        this.serv.getData().subscribe((productResponse)=>{
          this.products = productResponse;
          console.log(this.products);
        })
      }
    },(err)=>{
      console.log(err);
    });
    
  }
  getSelectedProduct(event): void {

   this.product = Object.assign({}, event);
   this.frmProduct.setValue(this.product);
  }
  getAllProducts():Array<Product>{
    return this.products;
  }
  deleteRecord(event):void{
    //let index = this.products.indexOf(event);
    let productRowId = event.ProductRowId;
    this.serv.deleteData(productRowId).subscribe((resp) => {
      if(resp != null){
        this.serv.getData().subscribe((getResp) => {
          this.products = getResp;
          this.message = `Data Received Successfully`;
        }, (error) => {
          this.message = `Error Occured ${error}`;
        });
      }
    }, (error) => {
      this.message = `Error Occured ${error}`;
    });
    // if( index >= 0 ){
    //   this.products.splice(index, 1);
    // }
  }
}
