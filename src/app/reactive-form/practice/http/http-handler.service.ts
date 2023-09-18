import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
    providedIn : 'root'
})

export class HttpHandlerService {

    apiUrl = 'https://http-api-f65c5-default-rtdb.asia-southeast1.firebasedatabase.app/user-data.json';

    constructor( public http : HttpClient ){

    }


    getObjects(){
        return this.http.get(this.apiUrl);
    }


    addNewObj(userObj : any){
        return this.http.post( this.apiUrl, userObj )    
    }

}