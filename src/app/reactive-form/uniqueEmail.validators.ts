import { AbstractControl, ValidationErrors } from "@angular/forms";

import { Observable } from 'rxjs';

export class UniqueEmailValidators {

    static uniqueEmail( control : AbstractControl ) : Promise<ValidationErrors | null> | Observable<ValidationErrors | null > {

        let registeredEmails = ['spo73@gmail.com','wwe@gmail.com','csk@gmail.com'];

        return new Promise( ( resolve ) => {
            setTimeout( () => {
                if( registeredEmails.includes(control.value) ) {
                    resolve({
                        varUniqueEmail : true
                    })
                }
                else {
                    resolve(null);
                }
            }, 2000 )
        } )

    }

}