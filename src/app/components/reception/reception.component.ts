import { Component, Input, Renderer2 } from '@angular/core';
import { CommonModule, Time } from '@angular/common';
import { GuestService } from 'src/app/shared/services/guest.service';
import { ToastrService } from 'ngx-toastr';
import { Guest } from 'src/app/shared/interfaces/guest';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SearchGuestPipe } from 'src/app/shared/pipe/search-guest.pipe';
import { ChangepasswordComponent } from "../Admin/changepassword/changepassword.component";

@Component({
  selector: 'app-reception',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SearchGuestPipe, FormsModule, ChangepasswordComponent],
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.css'],
   template: `{{ now }}`
})
export class ReceptionComponent {

  public now: Date = new Date();

  constructor( private _GuestService:GuestService
    , private _ToastrService:ToastrService ,
    private _FormBuilder:FormBuilder,
    private _Renderer2:Renderer2
  ) {  }

  term:string = "";
  GuestID:any="";

  Guest:Guest []=[];

  checkBox:any ="";
  isLoding:boolean = false;


  @Input() checkboxNum:any







  GuestFormCheck : FormGroup = this._FormBuilder.group ({

    guestId : [this.GuestID],
    checked: [this.checkBox],

})



patchName() {
  this.GuestFormCheck.get("guestId")?.setValue(this.GuestID);
  this.GuestFormCheck.get("checked")?.setValue(this.checkBox);

 }

   // **************************************

   cli(id:any):void {
    console.log( this.GuestID = id );
   }

   changeCheckBox(Id:any):void {



  //  var stutse:HTMLElement | any = document.getElementById('stutse');
  //  console.log("st " + stutse.checked)

  //    if (stutse.checked == true) {
  //     this.isLoding = true
  //     console.log(this.checkBox = 0)
  //     this.cli(Id);


  //   } else{
  //     this.isLoding = false
  //     console.log(this.checkBox = 1)
  //     this.cli(Id);

  //   }

  let stusts = this.GuestFormCheck.get('checked')?.value

  if (stusts == true) {

    console.log(this.checkBox = 0)
    this.cli(Id);

  }else {

    console.log(this.checkBox = 1)
    this.cli(Id);

  }

    this.patchName()

    this.handelFormCheck()


    // this.checkboxNum = this.checkboxNum ? 1 : 0 ;
    // console.log(this.checkboxNum)

   }





  ngOnInit(): void {

    this.getAllGuestByData();

  }



  getAllGuestByData() :void {

    this._GuestService.GetAllGuest().subscribe({

      next: (response) => {

        console.log(response);
        this.Guest = response

      },
      error: (err) => {

        console.log(err);
        this._ToastrService.error("لم يتم التنفيذ");


      }



    })

  }


  handelFormCheck() :void {

      let userData = this.GuestFormCheck.value ;
      console.log(userData);



        // alert(this.AgencyFormAdd.get('AgencyName')?.value))

    this._GuestService.CheckIn(userData).subscribe({

    next : (response) => {



       this.Guest = response
       this._ToastrService.warning("تم التعديل");

       this.getAllGuestByData();


    },error: (err) => {

      console.log(err);
      this._ToastrService.error("لم يتم التنفيذ");


    }



  });





  }


}
