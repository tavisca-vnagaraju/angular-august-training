Angular Project with important files

1. package.json
   1. COntains all standard packages required for development and testing (devDependencies)
   2. All packages those are required during production (depdnencies)
2. tsconfig.json
   1. TypeScript configuration file, this contains the configuration of Angular source file compilations
3. angular.json
   1. Angular Project configurations
      1. Dev. Build
      2. Test Build
      3. Production Build
4. main.ts
   1. Entrypoint of Angular application
5. Ahead-of-Time (AoT)
   1. If aot=true then, Pre-Compiles the angular application on server and generate buil/test/production files whicj can bedelivered to browser
   2. If aot=false, the angular uses JIT compiler, this loads the code in browser and compiled in browser. Slower than Aot
   3. # Angular 9+ the aot=true by default uses Ivy compiler, compiles all js and HTML templates into high-compressed production files. 1. Ivy will be used in production build
      Angular Main classes
6. NgModule, applied on class to uses that class as Angular module
7. Component, , applied on class to uses that class as Angular component
8. Injectable, , applied on class to uses that class as Angular Service
9. Directive , applied on class to uses that class as Angular Directive
10. Pipe , applied on class to uses that class as Angular Pipe

======================================================================Angular Dev. Build

1. runtime.js
   1. The Angular Runtime JS Object to execute app in browser
2. polifills.js
   1. The interface to execute ES6 methods in browser
3. styles.js
   1. JS object for all internal and external css
4. vendor.js
   1. JS transpilation of all standard Angular Packages
5. main.js
   1. # The Develope transpilaed code
      Programming with Angular
      IMP\*\*\* Each Component must be declaraed in 'declarations' array of NgModule
6. Binding
   1. Interpolation
      1. Read-only binding
      2. {{<PUBLIC-DATA-MEMBER-FROM-COMPONENT>}}
      3. Uses JavaScript's eval() function
         1. {{2+4}} --> 6
   2. Property Binding
      1. HTML DOM is bound with the public datamember of component
         1. <input type="text" [value]="<PUBLIC-DATA-MEMBER-FROM-COMPONENT>">
         2. [href], [checked][disable], etc
            1. Defined iin BrowserModule
         3. [myval]
   3. Event Binding
      1. <input type="button" (click)="<PUBLIC-METHOD-FROM-COMPONENT>">
   4. Two-Way Binding
      1. Property Binding + Event Binding
      2. Attribute Directive of name 'ngModel'
      3. <input type="text" [(ngModel)]="<PUBLIC-DATA-MEMBER-FROM-COMPONENT>">
      4. To execute ngModel, we need to import 'FormsModule' from @angular/forms package in 'imports' array of NgModule.
      5. ngModel, contains ngModelChanges event,
         1. watch the default event on DOM element where ngModel is applied e.g. <input>/<select> DOM elemnt's, the default event is 'change'
         2. ngModel will read the updated value of DOM element, and pass the value to component to the currespoing proeprty
         3. Component will update itself and then update the property and all other properties those are depending on property bi=eing updated.
         4. Send the updated values back to the UI using BInding
7. The Directives
   1. They are the objects those will be used to define Custom Reusable UI and or custom reusable function behavior for HTML DOM elements
   2. Component Directive
      1. To re-use component as reusable directive then use it in the HTML of other component using its selector
   3. Structural Directives
      1. USed to modify DOM elements using iterations, conditional statements
         1. \*ngFor, accepts for..of loop and iterates over a collection
         2. \*ngIf, accepts boolean condition
         3. \*ngSwitch-ngSwitchCase
   4. Attribute Directives
      1. Attributes applied on DOM elements to define ite behavior e.g. ngModel
      2. e.g.
         1. formGroup, formControlName
8. Components Reusability
   1. Input and Output
   2. Component Parent Child Communication
   3. define the isDelete input decorated property in the Child component. When this is true, then generate delete button for each row in child table. When this button is clicked then the record must be deleted from parent
9. Forms
   1. Reactive Forms
      1. ReactiveFormsMoudule to be impported in NgModule from @angular/forms
         1. FormGroup class
            1. applied <form> tag using [formGroup] directive to read the FormModel(?)
            2. FormGrop is a collection of FormControl
            3. FormControl is an editable element in <form></form>
            4. FormControl binds the public property of Model class to the HTML editable elements using 'formControlName' custom attribute directive
            5. FormGrouo.value, is used to read data posted from <form>
            6. FormGroup.setValue() method to pass data to form
            7. FormControl.value is sued to read data from editable element
            8. FormCOntrolsetValue() to assign value
         2. Validators class that contains validation methods to validate Model class properties
   2. Validations
      1. Implemented usaing Validatores class
         1. Static methods
            1. required(AbstractControl)/requiredTrue(AbstractControl)
            2. min(number)/max(number)
            3. minlength(number)/maxlength(number)
            4. pattern(string|RegEx)
            5. email(AbstractControl)
            6. compose([Array of Validators])/composeAsync([Array of Validators])
      2. Evaluate the Model-Validations rules on UI element
         1. <formGroup>.controls.<formControlName>.dirty, the element is changed
            1. e.g. frmProduct.controls.ProductRowId.dirty
         2. <formGroup>.controls.<formControlName>.invalid / !<formGroup>.controls.<formControlName>.valid --> element is invalid based on rules
            1. e.g. frmProduct.controls.ProductRowId.invalid
         3. display the error message
            1. <formGroup>.controls.<formControlName>.errors.<error-condition>
               1. e.g. frmProduct.controls.ProductRowId.errors.required
10. Services
    1. Observers with Components
    2. HTTP Communications
       1. Secure calls
    3. Interceptor
11. LitElements and Angular Elements
    1. Creating Web Components
12. Micro-FrontEnds
    1. USing Elements with independent libraries
13. Routing
    1. SPA
    2. Lazy Loading
14. Testing
15. Jest
    1. Component
    2. Service
16. Misc
17. IOTA CSS
18. Gulp
19. Custom Decorators

======================================================================================
Ex 2:
Define the isDelete input decorated property in the Child component. When this is true, then generate delete button for each row in child table. When this button is clicked then the record must be deleted from parent

Ex 3: Validate the complete ProductForm for required for all inputs, Description must not be more than 50 characters, BasePrice Cannot be -ve, ProductName must not have any special characters, ProductId must not have blank space. (Mandatory)

Ex. 4: Write a custom validator that will not accept duplicate value for ProductId (Mandory)

=======================================================================
RxJs, the Response Extension for JavaScript, provides the Observale Operator System(?) to subscribe to External Http Calls and maintain the received data from it.
Observale Operator System(?)
Ths object model that will hold the data and subscription over whihc the data will be 'streamed' to subscriber
Observable.map(), sequential call execution
Obsrervable.forkJoin(), parallel call execution
Obseravble.subscribe(), stream data to subscriber when it is available in observable

@angular/common/http

- HttpClientModule
  - Platform for Http async calls
  - Resolves HttpClient
- HttpClient
  - get<T>/post<T>/put<T>/delete<T>
- HttpHeaders

======================================================================
Modify the Product Reactiuve Form with the Http Service Support, to perform CRUD operations. The Table showing the Products data sould have delete button to delete (Note: Delete request must be made form the ProductReactiveFormComponent)
=======================================================================
Directives - reusable UI - reusable functional behavior

Elements - Principals of WebComponents like LitElements - More Flexible and easy to configure than LitElements - Angular Component as Elemement - Packages - @angular/element - document-register-element - Provode the Custom Element Registartion in DOM - Help the CustolElementRegistry of the browser to load/instantiate and execute the Custom Element - Custom events are defined in Angular Elements using EventEmitter<T> - The subscriber of the event from the Angular-Elements 'must use' the CustomEvent object to read data from the event - The subsciber of the event emitted from Angular Element must use on-<EventName>="<Method>(\$event)"

Angular Component Vs Component Directive vs Element

Presenter with Logic for Angular Application --> Angular Component
Presenter with reusable Functional UI within Angular Application (Same Project / Multiple Angular Projects) --> Angular Component Directive
Reusable FUnctional UI for Hybrid Front-End Apps (?) --> Angular Element
======================================================================
Custom Reusable Behavior implmented using Directives
Impleted as 'Custom Attribute Directive'

1. Target the HTML Element that will be affected with behavior
   1. ElementRef, the class that will target to HTML element for applying directive
2. Deifine the type of effect e.g. updating the style
   1. Renderer2, the class that will be use to apply the effect on element and render it
3. Event that cause the custom effect
   1. HostListener decorator, applied on methods of the directives so that these method will be executed / invoked when an event is raised on HTML element that is applied with directive
4. Directive Decorator applied on class
5. Custom Attribute directives are always used as 'Property-Binding'

========================================================================
Ex 6: (Offline), thursday
Create a custom directive that will host the blur event of the HTML input element and perform that following operations

- should validate the data entered into the text element against the Credit-Card Expression
  - XXXX-XXXX-XXXX-XXXX
    - SHould Automatically add '-' in the expression after validating the card expression

======================================================================
Micro Front-End using Angular

1. Create two or more Angular Apps with following mandatory packages
   1. @angular/elements
   2. @webcomponents/custom-elements
   3. @webcomponents/webcomponentsjs
   4. document-register-element
2. For each Angular app Run the following command
   1. ng add ngx-build-plus
      1. Angular CLI Express Build for compiling the Angular application into single distributable js file
   2. Modify the angular.json of each Angular project with its build configuration
      1. "architect": {
         "build": {
         "builder": "ngx-build-plus:build",
   3. Create Angular Elements with required logic
3. Build each angular app in single file using following command
   1. ng build --prod --output-hashing none --single-bundle true
      1. Bundle all Angular dependencies in a single file main.js
      2. ./dist/<project-folder>/main.js
4. Host each Angular app in seperate host
   1. Docker Image (recommanded)
      1. Node.js + Angular Image of Docker
   2. Node.js server
      1. lite server
      2. Express Server
      3. http-server
         1. npm install -g http-server
         2. To start the server on a port
            1. http-server -p <PORT-NO>
   3. Any other web Server
5. Add a Container Application (Angular/React/JavaScript)
   1. Use CDN to refer the following JS
      1. <script src="https://cdnjs.cloudflare.com/ajax/libs/zone.js/0.9.1/zone.min.js"></script>
      2.
      <script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.2.10/custom-elements-es5-adapter.js"></script>
   2. Load the output JavaScript from Angular app from their CDNs

Create 3 angular App, two apps will have Angular Elements with npx build (see Micro Front-End using Angular above), load these apps as Micro Front-Ends in the third angular app
