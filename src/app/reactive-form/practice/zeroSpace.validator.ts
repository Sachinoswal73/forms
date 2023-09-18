import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";

export class ZeroSpaceValidator {

    static findSpace( inpVal : AbstractControl ) : Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {

       return new Promise( (resolve)=> {

        let emails = ['spo@gmail.com','ppo@gmail.com'];
        
        setTimeout(()=>{
            if( emails.includes(inpVal.value) ) {
                resolve({foundSpace : true})
            }
            else {
                resolve(null);
            }
        },1000)

       } )

    }

}