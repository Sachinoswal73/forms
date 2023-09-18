import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ZeroSpaceValidator } from './zeroSpace.validator';
import { PracticeService } from './practice.service';
import { PracticeModel } from './practice.model';
import { ZeroSpaceAsyncValidator } from './zeroSpaceAsync.validator';
import { UniquePwdValidator } from './uniqPwdAsync.validator';
import { PropertyRead } from '@angular/compiler';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})

export class PracticeComponent implements OnInit {

  signinForm : any;

  sUsers : any;

  constructor( public praSer : PracticeService ){
   
  }


  ngOnInit(): void {
    
    this.signinForm = new FormGroup({
      email : new FormControl('', [Validators.required],[ZeroSpaceValidator.findSpace]),
      password : new FormControl('',Validators.required,UniquePwdValidator.findPwds(this.praSer)),
      city : new FormControl('Pune'),
      state : new FormControl(''),
      zip : new FormControl('',Validators.required,ZeroSpaceAsyncValidator.findEmail(this.praSer))
    })

    // console.log(this.signinForm);

    // this.sUsers = this.praSer.updsUsers();

    

    // console.log(this.sUsers);

  }


  onSignin(){
    
      let newObj1 = new PracticeModel(this.signinForm.value.email, this.signinForm.value.password, this.signinForm.value.city, this.signinForm.value.state, this.signinForm.value.zip);

      // console.log(newObj1);

      this.praSer.addNewUser(newObj1);

      // this.sUsers = this.praSer.updsUsers();  
      
      // this.praSer.newUserEmitter.emit();

  }


}
