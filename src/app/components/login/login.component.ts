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
  UserId:any;
  Role:any;




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
             localStorage.setItem('etoken' , response.TokenValue);
             this.UserId = response.UserId
             this.Role = response.Role;
              this.UserId = localStorage.setItem('UserId', this.UserId);
              this.Role = localStorage.setItem('Role', this.Role);
              this.Role = localStorage.getItem('Role');
            this._AuthService.decodeUser();

            // this._Router.navigate(['/guest']);
              //  this._Router.navigate(['/reception']);
              if(this.Role=='SuperUser'){

                this._Router.navigate(['/home'])
                // this._Router.navigate(['/home'])

              }else if (this.Role=='Reception') {

                this._Router.navigate(['/reception'])

              }else if (this.Role=='Boaba') {

                this._Router.navigate(['/visitorsys'])

              }
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
