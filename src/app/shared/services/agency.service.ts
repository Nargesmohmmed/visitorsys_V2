import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { environments } from '../../../environments/environment';
// import { environments } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  constructor(private _HttpClient:HttpClient) { }
  // baseUrl:string = `http://localhost:5000/api/Agency/`;
  // baseUrl:string = `${environments.apiUrl}Agency/`;
  baseUrl:string = `${environments.apiUrl}Agency/`;

  GetAllAgency():Observable<any> {

    return this._HttpClient.get(`${this.baseUrl}GetAllAgency`);

  }

  AddAgency(userData:object):Observable<any> {

    return this._HttpClient.post(`${this.baseUrl}AddNewAgency`,userData)

  }

  UpdateAgency(userData:object):Observable<any> {

    return this._HttpClient.put(`${this.baseUrl}UpdateAgencyName`,userData)

  }




}
