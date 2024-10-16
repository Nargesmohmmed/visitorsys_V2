import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdjectiveService } from 'src/app/shared/services/adjective.service';
import { SearchAjectivePipe } from 'src/app/shared/pipe/search-ajective.pipe';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adjective',
  standalone: true,
  imports: [CommonModule , SearchAjectivePipe , ReactiveFormsModule , FormsModule],
  templateUrl: './adjective.component.html',
  styleUrls: ['./adjective.component.css']
})
export class AdjectiveComponent implements OnInit {

  constructor(private _AdjectiveService:AdjectiveService ,
     private _FormBuilder:FormBuilder
    ,private _ToastrService:ToastrService) {}


  // **************************** var

  Adjective:any={};
  update:any[] = [];
  term:string = "";

  AdjectiveID:any="";
  UserId:any = localStorage.getItem('UserId');

  // ******************************

    // ************************************** formAdd


    AdjectiveFormAdd: FormGroup = this._FormBuilder.group({

      UserId : [this.UserId],
      Adjective: ['' , [Validators.required]] ,

    })

    // **************************************

    cli(id:any):void {
      console.log( this.AdjectiveID = id );
     }
        // ************************************** formUpdate


        AdjectiveFormUpdata: FormGroup = this._FormBuilder.group({

          UserId : [this.UserId ],
          Adjective: [this.AdjectiveID , [Validators.required]] ,
          id :[this.AdjectiveID]

        });

        patchName() {
          this.AdjectiveFormUpdata.get("UserId")?.setValue(this.UserId);
          this.AdjectiveFormUpdata.get("id")?.setValue(this.AdjectiveID);

         }

        // **************************************



  ngOnInit(): void {

    this.GetAllAdjective();

  }


  GetAllAdjective() :void {

    this._AdjectiveService.GetAllAdjective().subscribe({

      next: (response) => {

        console.log(response);
        this.Adjective = response

      },
      error: (err) => {

        console.log(err);
        this._ToastrService.error("لم يتم التنفيذ!!");

      }



    })

  }

  handleFormAdd():void {

    // this.agrncy = this.AgencyFormAdd.value

    let userData = this.AdjectiveFormAdd.value ;
    console.log(userData);
    // alert(this.AgencyFormAdd.get('UserId')?.value);
    // alert(this.AgencyFormAdd.get('AgencyName')?.value)
    this._AdjectiveService.AddAdjective(userData).subscribe({

      next: (response) => {

        console.log(response);
        this.Adjective = response
        this._ToastrService.success("تم الاضافة");
        this.GetAllAdjective();
        this.cler();

      }, error: (err) => {

        // alert(err);
        console.log(err);
        this._ToastrService.error("لم يتم التنفيذ!!");

      }

    })

  }



  handleFormUpdate():void {

    let userData = this.AdjectiveFormUpdata.value ;
    console.log(userData);

    this._AdjectiveService.UpdateAdjective(userData).subscribe({

      next : (response) => {

         console.log(response)
         this.Adjective = response
         this._ToastrService.warning("تم التعديل");
         this.GetAllAdjective();
         this.cler();

      },error: (err) => {

        console.log(err);
        this._ToastrService.error("لم يتم التنفيذ!!");

      }



    });


  }



  cler(): void {

    this.AdjectiveFormAdd.get("Adjective")?.setValue("");

    this.AdjectiveFormUpdata.get("Adjective")?.setValue("");




  }


}
