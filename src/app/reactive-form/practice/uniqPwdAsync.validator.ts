import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { PracticeService } from "./practice.service";
import { Observable } from "rxjs";

export class UniquePwdValidator{

    static findPwds( praSer : PracticeService ) : AsyncValidatorFn {

        let pwds : any = [];

        praSer.sUsers.forEach( ( psu : any ) => {

            pwds.push(psu.sPassword);

        } )

        return ( inputValue : AbstractControl ) : Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {

                return new Promise( (resolve) => {

                   setTimeout( () => {

                    if( pwds.includes(inputValue.value) ){
                        // console.log('trgrd');
                        resolve({ foundSpace : true })
                    }
                    else {
                        resolve(null);
                    }

                   }, 1000 )

                } )            

        }

    }

}