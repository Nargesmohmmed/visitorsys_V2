import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../../../environments/environment';
// import { environments } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AdjectiveService {


  constructor(private _HttpClient:HttpClient) { }
  // baseUrl:string = `http://localhost:5000/api/JobDescribtion/`;
  // baseUrl:string = `${environments.apiUrl}JobDescribtion/`;
  baseUrl:string = `${environments.apiUrl}JobDescribtion/`;

  GetAllAdjective():Observable<any> {

    return this._HttpClient.get(`${this.baseUrl}GetAllJobDescribtion`);

  }

  AddAdjective(userData:object):Observable<any> {

    return this._HttpClient.post(`${this.baseUrl}AddNewJobDescribtion`,userData)

  }

  UpdateAdjective(userData:object):Observable<any> {

    return this._HttpClient.put(`${this.baseUrl}UpdateJobDescribtion`,userData)

  }


}
