import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../../../environments/environment';
// import { environments } from '../../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class HostService {


  constructor(private _HttpClient:HttpClient) { }
  // baseUrl:string = `http://localhost:5000/api/Host/`;
  // baseUrl:string = `${environments.apiUrl}Host/`;
  baseUrl:string = `${environments.apiUrl}Host/`;



  GetAllHost():Observable<any> {

    return this._HttpClient.get(`${this.baseUrl}GetAllHosts`);

  }


  AddHost(userData:object):Observable<any> {

    return this._HttpClient.post(`${this.baseUrl}AddNewHost`,userData)

  }

  UpdateHost(userData:object):Observable<any> {

    return this._HttpClient.put(`${this.baseUrl}UpdateHost`,userData)

  }




}
