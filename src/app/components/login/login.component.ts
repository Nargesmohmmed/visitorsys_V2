import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule , RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _AuthService:AuthService ,  private _Router: Router , private _FormBuilder:FormBuilder) {}


  errMsg:string = '';
  isLoading:boolean = false;
  Token:any;


  loginForm : FormGroup = this._FormBuilder.group({

    username : ['' , [Validators.required]],
    password : ['' , [Validators.required]],

  });


  handleForm():void {

    const userData = this.loginForm.value;
    console.log(userData);
    this.isLoading = true;

    if(this.loginForm.valid === true) {

    this._AuthService.login(userData).subscribe({

      next: (response) => {

        console.log(response);
             localStorage.setItem('etoken' , response.tokenValue);
            this._AuthService.decodeUser();
               this._Router.navigate(['/home']);
            this.isLoading = false;

      },

        error: (err) => {

          console.log(err);

          this.errMsg = err.error.message;
          this.isLoading = false;

        }

    })



    }

  }


}
