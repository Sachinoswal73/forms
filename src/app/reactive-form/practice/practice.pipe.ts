import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'encode'
})

export class PracticePipe implements PipeTransform {

   transform( val : any, ...args : any[] ){
    
    return val.length * 2 + val.split('').reverse().join('').toLowerCase();

   }

}