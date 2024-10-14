import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControlOptions, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule  , FormsModule ],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit  {

  constructor(    private _FormBuilder:FormBuilder ,
    private _Router:Router
    , private _ToastrService:ToastrService ) {}

    // **************************** var


    Users:any[]=[];
    update:any[] = [];
    term:string = "";

    UsersId:any="";

    // ******************************

        // **************************************

        cli(id:any):void {
          console.log( this.UsersId = id );
         }

            // ************************************** formAdd


   UsersFormAdd: FormGroup = this._FormBuilder.group({

    UserName : ['' , [Validators.required]],
    UsersPassword: ['' , [Validators.required]] ,
    UsersrePassword: ['' ] ,
    UsersEmail : ['' , [Validators.required]],
    UserJop: ['' , [Validators.required]] ,
    UsersPhone : ['' , [Validators.required ]] ,


  })


    // **************************************

       // ************************************** formUpdate


       UsersFormUpdata: FormGroup = this._FormBuilder.group({

        id :[this.UsersId],
        UserName : ['' , [Validators.required]],
        UsersPassword: ['' , [Validators.required]] ,
        UsersrePassword: ['' ] ,
        UsersEmail : ['' , [Validators.required]],
        UserJop: ['' , [Validators.required]] ,
        UsersPhone : ['' , [Validators.required ]] ,

      } , {validators : [this.confirmPassword]}  as FormControlOptions);

      patchName() {
        this.UsersFormUpdata.get("id")?.setValue(this.UsersId);

       }


       confirmPassword(group:FormGroup):void {

        const password = group.get('UsersPassword');
        const rePassword = group.get('UsersrePassword');

        if (rePassword?.value == '') {

          rePassword.setErrors({required:true});

        }

        else if (password?.value != rePassword?.value) {

          rePassword?.setErrors({mismatch:true});

        }

      }

      // **************************************

      ngOnInit(): void {

        this.getAllUsers();


      }

      getAllUsers() :void {

        // this._HostService.GetAllHost().subscribe({

        //   next: (response) => {

        //     console.log(response);
        //     this.Host = response

        //   },
        //   error: (err) => {

        //     console.log(err);
        //     this._ToastrService.error("Error");


        //   }



        // })

      }

        // ****************************Add

  handleFormAdd(): void{


    let userData = this.UsersFormAdd.value ;
    console.log(userData);

    // this._HostService.AddHost(userData).subscribe({

    //   next: (response) => {

    //     console.log(response);
    //     this._ToastrService.success("تم الاضافة");
    //     this.getAllHost();
      this.cler();

    //   }, error: (err) => {

    //     alert(err);
    //     console.log(err);
    //     this._ToastrService.error("Error");

    //   }

    // })



}

// ************************************UpDate


handleFormUpdate():void {

  let userData = this.UsersFormUpdata.value ;
  console.log(userData);

  // this._HostService.UpdateHost(userData).subscribe({

  // next : (response) => {

  //      console.log(response)
  //      this.Host = response
  //      this.HostId = response.id
  //      this._ToastrService.warning("تم التعديل");
  //      this.getAllHost();
       this.cler();

  //   },error: (err) => {

  //     console.log(err);
  //     this._ToastrService.error("!!لم يتم التنفيذ");

  //   }



  // });


}

cler(): void {

  this.UsersFormAdd.get("UserName")?.setValue("");
  this.UsersFormAdd.get("UsersPassword")?.setValue("");
  this.UsersFormAdd.get("UsersrePassword")?.setValue("");
  this.UsersFormAdd.get("UsersEmail")?.setValue("");
  this.UsersFormAdd.get("UserJop")?.setValue("");
  this.UsersFormAdd.get("UsersPhone")?.setValue("");


  this.UsersFormUpdata.get("UserName")?.setValue("");
  this.UsersFormUpdata.get("UsersPassword")?.setValue("");
  this.UsersFormUpdata.get("UsersrePassword")?.setValue("");
  this.UsersFormUpdata.get("UsersEmail")?.setValue("");
  this.UsersFormUpdata.get("UserJop")?.setValue("");
  this.UsersFormUpdata.get("UsersPhone")?.setValue("");


}



}
