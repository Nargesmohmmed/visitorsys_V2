import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import { environments } from '../../../environments/environment';
// import { environments } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }
  // baseUrl:string = `http://localhost:5000/api/Login`;
  // baseUrl:string = `${environments.apiUrl}Login`;
  baseUrl:string = `${environments.apiUrl}Login`;

  userInfo:any;


  login(userData:object):Observable<any> {

    return this._HttpClient.post(`${this.baseUrl}` , userData)

  }


    // jwt-decode يفك توكن
    decodeUser():void {

      const enCode = localStorage.getItem('etoken');

      if(enCode !== null) { //tmam

        const decode = jwtDecode(enCode);

        this.userInfo = decode;
        // موجودة فيها معلومات اليوزر
        console.log(this.userInfo)

      }

    }

}
