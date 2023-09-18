import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map } from "rxjs";

@Injectable({
    providedIn : 'root'
})

export class PracticeObservable {

        myBS : BehaviorSubject<any> = new BehaviorSubject('loadingggggg');

        startIncr(){

            let counterr = 0;

            setInterval( () => {

                this.myBS.next(counterr);
                counterr++;

                if ( counterr == 73 ) {
                    this.myBS.complete();
                }

            }, 1000 )

            let cvBs = this.myBS.pipe(
                map( ( mbp : any ) => {
                    return mbp + ' map'
                } )
            )

            return cvBs;

        }

}