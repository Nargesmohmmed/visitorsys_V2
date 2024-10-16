import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostService } from 'src/app/shared/services/host.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Host } from 'src/app/shared/interfaces/host';
import { SearchHostPipe } from 'src/app/shared/pipe/search-host.pipe';
import { AdjectiveService } from 'src/app/shared/services/adjective.service';
import { Adjective } from 'src/app/shared/interfaces/adjective';

@Component({
  selector: 'app-host',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule  , FormsModule , SearchHostPipe],
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent  implements OnInit {

  constructor(private _HostService:HostService ,
    private _FormBuilder:FormBuilder ,
    private _Router:Router
    , private _ToastrService:ToastrService ,
    private _AdjectiveService:AdjectiveService
  ) {}


  // **************************** var

  Adjective:Adjective[]=[];

  Host:Host[]=[];
  update:any[] = [];
  term:string = "";

  HostId:any="";

  UserId:any = localStorage.getItem('UserId');

  // ******************************

   // ************************************** formAdd


   HostFormAdd: FormGroup = this._FormBuilder.group({

    HostName : ['' , [Validators.required]],
    AdjectiveId: ['' , [Validators.required]] ,
    HostEmail : ['' , [Validators.required]],
    UserID: [this.UserId] ,
    HostTelephone : ['' , [Validators.required ]] ,


  })


    // **************************************

    cli(id:any):void {
      console.log( this.HostId = id );
     }

    // ************************************** formUpdate


    HostFormUpdata: FormGroup = this._FormBuilder.group({

    Id :[this.HostId],
    HostName : ['' , [Validators.required]],
    AdjectiveId: ['' , [Validators.required]] ,
    HostEmail : ['' , [Validators.required]],
    UserID: [this.UserId] ,
    HostTelephone : ['' , [Validators.required ]] ,

    })

    patchName() {
      this.HostFormUpdata.get("Id")?.setValue(this.HostId);
      this.HostFormUpdata.get("UserID")?.setValue(this.UserId);

     }

    // **************************************

ngOnInit(): void {

    this.getAllHost();

    this.getAllAdjective();


  }


  // nargis@94810

  getAllHost() :void {

    this._HostService.GetAllHost().subscribe({

      next: (response) => {

        console.log(response);
        this.Host = response

      },
      error: (err) => {

        console.log(err);
        this._ToastrService.error("لم يتم التنفيذ!!");


      }



    })

  }

  getAllAdjective(): void {

    this._AdjectiveService.GetAllAdjective().subscribe({

      next: (response) => {

        console.log(response);
        this.Adjective = response

      },
      error: (err) => {

        console.log(err);
        this._ToastrService.error("لم يتم التنفيذ!!");


      }

    });

  }


  // ****************************Add

  handleFormAdd(): void{

       // this.agrncy = this.AgencyFormAdd.value

       let userData = this.HostFormAdd.value ;
       console.log(userData);
       // alert(this.AgencyFormAdd.get('UserId')?.value);
       // alert(this.AgencyFormAdd.get('AgencyName')?.value)
       this._HostService.AddHost(userData).subscribe({

         next: (response) => {

           console.log(response);
           this.Host = response
           this._ToastrService.success("تم الاضافة");
           this.getAllHost();
         this.cler();

         }, error: (err) => {

           alert(err);
           console.log(err);
           this._ToastrService.error("لم يتم التنفيذ!!");

         }

       })



  }


  handleFormUpdate():void {

    let userData = this.HostFormUpdata.value ;
    console.log(userData);

    this._HostService.UpdateHost(userData).subscribe({

    next : (response) => {

         console.log(response)
         this.Host = response
         this.HostId = response.id
         this._ToastrService.warning("تم التعديل");
         this.getAllHost();
         this.cler();

      },error: (err) => {

        console.log(err);
        this._ToastrService.error("!!لم يتم التنفيذ");

      }



    });


  }

  cler(): void {

    this.HostFormAdd.get("HostName")?.setValue("");
    this.HostFormAdd.get("AdjectiveId")?.setValue("");
    this.HostFormAdd.get("HostEmail")?.setValue("");
    this.HostFormAdd.get("HostTelephone")?.setValue("");


    this.HostFormUpdata.get("HostName")?.setValue("");
    this.HostFormUpdata.get("AdjectiveId")?.setValue("");
    this.HostFormUpdata.get("HostEmail")?.setValue("");
    this.HostFormUpdata.get("HostTelephone")?.setValue("");

  }




}
