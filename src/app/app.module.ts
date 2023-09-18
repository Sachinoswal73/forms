import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PracticeComponent } from './reactive-form/practice/practice.component';
import { TableComponent } from './reactive-form/practice/table/table.component';
import { PracticePipe } from './reactive-form/practice/practice.pipe';
import { PracticeDirective } from './reactive-form/practice/practice.directive';
import { HttpComponent } from './reactive-form/practice/http/http.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    PracticeComponent,
    TableComponent,
    PracticePipe,
    PracticeDirective,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
