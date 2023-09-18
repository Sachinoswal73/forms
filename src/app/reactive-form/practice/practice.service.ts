import { Injectable, EventEmitter } from '@angular/core';
import { PracticeModel } from './practice.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn : 'root'
})

export class PracticeService{

    // newUserEmitter = new EventEmitter();

    sUsers = [
        new PracticeModel('npo@gmail.com','npo@999','Satara','MH','415501'),    
        new PracticeModel('bpo@gmail.com','bpo@999','Satara','MH','415511')
    ]

    newUserObsrvbl = new BehaviorSubject(this.sUsers.slice());

    updsUsers(){

        // return this.sUsers.slice();

    }

    addNewUser( newObj : any ){

        this.sUsers.push(newObj);

        // this.newUserEmitter.emit(this.sUsers.slice());

        this.newUserObsrvbl.next(this.sUsers.slice());

    }

}