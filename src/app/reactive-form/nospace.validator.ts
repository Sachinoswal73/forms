import { AbstractControl, ValidationErrors } from "@angular/forms";

export class NoSpaceValidator {

    static keepNoSpace( pval : AbstractControl ) : ValidationErrors | null {

        if ( pval.value?.includes(' ') ){
            return { noSpace : true }
        }
        else {
            return null;
        }

    }

}