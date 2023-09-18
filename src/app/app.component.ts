import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'forms';

  // onSubmit( mf1 : any){
  //   console.log(mf1);
  // }

  @ViewChild('myForm1') mf1val : any;

  onSubmit(){
    
    console.log(this.mf1val);

  }


}
