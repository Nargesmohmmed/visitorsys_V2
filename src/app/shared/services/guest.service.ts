import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GuestService {


  constructor(private _HttpClient:HttpClient) { }
  // baseUrl:string = `http://localhost:5000/api/Guest/`;
  baseUrl:string = `${environments.apiUrl}Guest/`;


  // http://localhost:5000/api/Guest/AddNewGuest


  GetAllGuest():Observable<any> {

    return this._HttpClient.get(`${this.baseUrl}GetAllGuest`);

  }

  GetAllGuestByData():Observable<any> {

    return this._HttpClient.get(`${this.baseUrl}GetAllGuestByDate`);

  }

  AddGuest(userData:object):Observable<any> {

    return this._HttpClient.post(`${this.baseUrl}AddNewGuest`,userData)

  }

  UpdateGuest(userData:object):Observable<any> {

    return this._HttpClient.put(`${this.baseUrl}UpdateGuestData`,userData)

  }

  CheckIn(userData:object):Observable<any> {

    return this._HttpClient.post(`${this.baseUrl}CheckIn`,userData)

  }


}
