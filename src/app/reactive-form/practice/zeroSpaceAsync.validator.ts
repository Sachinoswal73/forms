import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { PracticeService } from "./practice.service";
import { Observable } from "rxjs";

export class ZeroSpaceAsyncValidator{

    static findEmail( praSer : PracticeService ) : AsyncValidatorFn {

        let emails : any = [];

        praSer.sUsers.forEach( ( psu : any ) => {

            emails.push(psu.sZip);

        } )

        return ( inputValue : AbstractControl ) : Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {

                return new Promise( (resolve) => {

                   setTimeout( () => {

                    if( emails.includes(inputValue.value) ){
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