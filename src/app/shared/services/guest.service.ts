import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { environments } from '../../../environments/environment.prod';
import { environments } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GuestService{


  constructor(private _HttpClient:HttpClient ) { }
  // baseUrl:string = `http://192.168.4.32:3030/api/Guest/`;


  baseUrl:string = `${environments.apiUrl}Guest/`;

       myToken = localStorage.getItem('etoken');


  GetAllGuest():Observable<any> {

    return this._HttpClient.get(`${this.baseUrl}GetAllGuest`

      , {

        headers :  new HttpHeaders({
            // 'accept': 'application/json ',
            'Authorization': `Bearer ${this.myToken}`



           })
          }

    )

  }

  GetAllGuestByData():Observable<any> {

    return this._HttpClient.get(`${this.baseUrl}GetAllGuestByDate`

      , {

        headers :  new HttpHeaders({
            // 'accept': 'application/json ',
            'Authorization': `Bearer ${this.myToken}`



           })
          }

    );

  }

  AddGuest(userData:object):Observable<any> {

    return this._HttpClient.post(`${this.baseUrl}AddNewGuest`,userData

      , {

        headers :  new HttpHeaders({
            // 'accept': 'application/json ',
            'Authorization': `Bearer ${this.myToken}`



           })
          }

    )

  }

  UpdateGuest(userData:object):Observable<any> {

    return this._HttpClient.put(`${this.baseUrl}UpdateGuestData`,userData

      , {

        headers :  new HttpHeaders({
            // 'accept': 'application/json ',
            'Authorization': `Bearer ${this.myToken}`



           })
          }

    )

  }

  CheckIn(userData:object):Observable<any> {

    return this._HttpClient.post(`${this.baseUrl}CheckIn`,userData

      , {

        headers :  new HttpHeaders({
            // 'accept': 'application/json ',
            'Authorization': `Bearer ${this.myToken}`



           })
          }

    )

  }



}
