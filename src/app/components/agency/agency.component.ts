import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBlankComponent } from 'src/app/Layout/nav-blank/nav-blank.component';
import { FormBuilder, FormControlOptions, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AgencyService } from 'src/app/shared/services/agency.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SearchPipe } from 'src/app/shared/pipe/search.pipe';
import { Agency } from 'src/app/shared/interfaces/agency';


@Component({
  selector: 'app-agency',
  standalone: true,
  imports: [CommonModule, NavBlankComponent , ReactiveFormsModule , SearchPipe , FormsModule ],
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css'] ,

})
export class AgencyComponent implements OnInit {



  constructor(private _AgencyService:AgencyService ,
            private _FormBuilder:FormBuilder ,
            private _Router:Router
            , private _ToastrService:ToastrService ) {}


// **************************** var

  Agency:Agency[]=[];
  update:any= {};
  term:string = "";

  AgencyID:any= "";
  UserId:any = localStorage.getItem('UserId');

  // ******************************




  // ************************************** formAdd


  AgencyFormAdd: FormGroup = this._FormBuilder.group({

    UserId : [this.UserId],
    AgencyName: ['' , [Validators.required]] ,


  })

  // **************************************

  cli(id:any):void {
    console.log( this.AgencyID = id );
   }



    // ************************************** formUpdate


    AgencyFormUpdata: FormGroup = this._FormBuilder.group({

      agencyName: ['' , [Validators.required]] ,
      userId: [this.UserId] ,
      id :[this.AgencyID]

    } );

    patchName() {
     this.AgencyFormUpdata.get("id")?.setValue(this.AgencyID);
     this.AgencyFormUpdata.get("userId")?.setValue(this.UserId);

    }


    // ****************************************




  ngOnInit(): void {

    this.getAllAgency()

  }


  getAllAgency() :void {

    this._AgencyService.GetAllAgency().subscribe({

      next: (response) => {

        console.log(response);
        this.Agency = response


      },
      error: (err) => {

        console.log(err);
        this._ToastrService.error("لم يتم التنفيذ!!");


      }



    })

  }

  handleFormAdd():void {

    // this.agrncy = this.AgencyFormAdd.value

    let userData = this.AgencyFormAdd.value ;
    // alert(this.AgencyFormAdd.get('UserId')?.value);
    // alert(this.AgencyFormAdd.get('AgencyName')?.value)
    this._AgencyService.AddAgency(userData).subscribe({

      next: (response) => {

        console.log(response);
        this._ToastrService.success("تم الاضافة");
        this.cler();
        this.getAllAgency();
        // this._Router.navigate(['/agency']);


      },
      error: (err) => {

        console.log(err);
        this._ToastrService.error("لم يتم التنفيذ!!");


      }

    })

  }


    handleFormUpdate ():void {

    let userData = this.AgencyFormUpdata.value ;
    // alert(this.AgencyFormAdd.get('id')?.value);
    console.log(userData);

    this._AgencyService.UpdateAgency(userData).subscribe({

       next : (response) => {

        console.log(response)
       this.AgencyID = response.id
        this.Agency = response
         this._ToastrService.warning("تم التعديل");
        //  this._ToastrService.warning(response.Message);
        this.getAllAgency();
        this.cler();


      },error: (err) => {

        console.log(err);
        this._ToastrService.error("!!لم يتم التنفيذ");

      }



    });


  }



  cler(): void {

    this.AgencyFormAdd.get("AgencyName")?.setValue("");
    // this.AgencyFormAdd.get("UserId")?.setValue("");
    this.AgencyFormUpdata.get("agencyName")?.setValue("");
    // this.AgencyFormUpdata.get("userId")?.setValue("");



  }



}
