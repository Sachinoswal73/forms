import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UniqueEmailValidators } from './uniqueEmail.validators';
import { NoSpaceValidator } from './nospace.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})

export class ReactiveFormComponent implements OnInit {

  reactiveForm : FormGroup | any;

  constructor( private fb : FormBuilder ){

  }

  ngOnInit(): void {
   
    // first arguement is value, second argument is array of validators & then third argument is array of asynchronous validators which use Promise - api call - timeout or Observables

    // this.reactiveForm = new FormGroup({
    //   fname : new FormControl('',[Validators.required, NoSpaceValidator.keepNoSpace ]),
    //   email : new FormControl(null, Validators.required, UniqueEmailValidators.uniqueEmail),
    //   phone : new FormControl('',[Validators.required, Validators.minLength(10)] ),
    //   pwd : new FormControl(null),
    //   knownLangs : new FormArray([new FormControl('', Validators.required)])
    // })

    // We can use any of these way to create a object of this reactive form, We can use new FormGroup, FormControl or FormArray as above
    // Or we can use formBuilder by injecting the dependency of it in the constructor as below

    this.reactiveForm = this.fb.group({
      fname : this.fb.control('', [Validators.required, NoSpaceValidator.keepNoSpace]),
      email : this.fb.control('', Validators.required, UniqueEmailValidators.uniqueEmail),
      phone : this.fb.control('',[Validators.required, Validators.minLength(10)]),
      pwd : this.fb.control(null),
      knownLangs : this.fb.array([this.fb.control('HTML',Validators.required),this.fb.control('CSS',Validators.required),this.fb.control('',Validators.required)])
    })

    
  }

  addNewLang(){
    this.reactiveForm.get('knownLangs').push(new FormControl('',Validators.required));
  }

  onSubmit(){

    console.log(this.reactiveForm);

  }

  patchMethod(){
    this.reactiveForm.patchValue({
      email : 'spo73@gmail.com'
    })
  }

  setAllValues(){
    this.reactiveForm.setValue({
      fname : null,
      email : 'spo73@gmail.com',
      phone : '9028831939',
      pwd : 'DkBp' 
    })
    this.reactiveForm.get('fname').touched = true;
  }

}
