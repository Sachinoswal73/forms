import { HttpHandler } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpHandlerService } from './http-handler.service';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { interval } from 'rxjs';
import { PracticeObservable } from '../practice.observable';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})

export class HttpComponent implements OnInit, OnDestroy {

  myObsrvbl : any;

  myInterval : any;

  rForm : any;

  gotData : any;

  constructor( public httpHndlr : HttpHandlerService, public pracObs : PracticeObservable  ){

  }

  ngOnInit(): void {
    
    this.rForm = new FormGroup({
      fname : new FormControl(''),
      phone : new FormControl('')
    })

    this.httpHndlr.getObjects().subscribe( ( gos : any ) => {

          this.gotData = gos;

    } )


    // this.myObsrvbl = interval(1000).subscribe( ( intv : any) => {

    //     this.myInterval = intv;

    // } )

    this.myObsrvbl = this.pracObs.startIncr().subscribe( ( pos : any ) => {

          this.myInterval = pos;

    } )


  }


  ngOnDestroy(): void {
    
   //  this.myObsrvbl.unsubscribe();

  }


  onSubmit(){

    // let newObj = {
    //   fname : this.rForm.value.fname,
    //   phone : this.rForm.value.phone
    // }

    // console.log(newObj);

    this.httpHndlr.addNewObj(this.rForm.value).subscribe( ( anos : any ) => {

            console.log(anos);

    } ) 

  }


}
