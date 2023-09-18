import { Component, OnInit } from '@angular/core';
import { PracticeService } from '../practice.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  sUsers : any;

  constructor( public praSer : PracticeService ){

  }

  ngOnInit(): void {
    
    this.sUsers = this.praSer.updsUsers();

    // this.praSer.newUserEmitter.subscribe( ( updArr : any ) => {

    //   this.sUsers = updArr;

    // } )

    this.praSer.newUserObsrvbl.subscribe( ( nuo : any ) => {
      this.sUsers = nuo;
  } )

  }


}
