import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { Day } from '@progress/kendo-date-math';
import { GuestService } from 'src/app/shared/services/guest.service';
import { ToastrService } from 'ngx-toastr';
import { SearchGuestPipe } from 'src/app/shared/pipe/search-guest.pipe';
import { AdjectiveService } from 'src/app/shared/services/adjective.service';
import { Adjective } from 'src/app/shared/interfaces/adjective';
import { HostService } from 'src/app/shared/services/host.service';
import { Host } from 'src/app/shared/interfaces/host';
import { AgencyService } from 'src/app/shared/services/agency.service';
import { Agency } from 'src/app/shared/interfaces/agency';
import { Guest } from 'src/app/shared/interfaces/guest';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-guest',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule  , SearchGuestPipe ,FormsModule ],
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css'] ,
  template: `   <kendo-datepicker
  [(ngModel)]="value"
  [disabledDates]="disabledDates"
>
</kendo-datepicker>`
})
export class GuestComponent implements OnInit  {

  public value: Date = new Date();
  public disabledDates: Day[] = [Day.Friday];


  constructor(private _FormBuilder:FormBuilder ,
    private _GuestService:GuestService ,
     private _ToastrService:ToastrService ,
    private _AdjectiveService:AdjectiveService ,
    private _HostService:HostService,
    private _AgencyService:AgencyService) {}


  minDate?:string ;
  x?:any ;
  minDatee:any ;
  date = new Date().toJSON();

  data:any = '';

    // **************************** var

    Guest:Guest[]=[];
    update:any[] = [];
    term:string = "";



    Adjective:Adjective[] = [];
    Host:Host[] = [];
    Agency:Agency[] = [];

    GuestID:any="";

    // ******************************




    GuestFormAdd : FormGroup = this._FormBuilder.group ({

      guestName: ['' , [Validators.required]],
      adjectiveId: ['' , [Validators.required]],
      hostId: ['' , [Validators.required]],
      agencyId: ['' , [Validators.required]],
      userId: ['' , [Validators.required]],
      pidNumber: ['' , [Validators.required]],
      guestType: ['' , [Validators.required]],
      dateIn: ['' , [Validators.required]],
      timeIn: ['' , [Validators.required]],
    // GuestState: ['' , [Validators.required]],
    // TimeOut: ['' , [Validators.required]],
    // GuestChecked: ['' , [Validators.required]],

  })


// ****************** ADD تحويل التاريخ و الوقت
  JsonData:any = {};
  sendDateTime():any {

    let dateValue = this.GuestFormAdd.controls['dateIn'].value;
    let timeValue = this.GuestFormAdd.controls['timeIn'].value;
    let guestName = this.GuestFormAdd.controls['guestName'].value;
    let adjectiveId = this.GuestFormAdd.controls['adjectiveId'].value;
    let hostId = this.GuestFormAdd.controls['hostId'].value;
    let agencyId = this.GuestFormAdd.controls['agencyId'].value;
    let userId = this.GuestFormAdd.controls['userId'].value;
    let pidNumber = this.GuestFormAdd.controls['pidNumber'].value;
    let guestType = this.GuestFormAdd.controls['guestType'].value;



    const dateParts = dateValue?dateValue.split('-'):null;
    const timeParts = timeValue?timeValue.split(':'):null;


    let requestBody = {

      dateIn: {
        yr : dateParts?dateParts[0]:'',
        mnth : dateParts?dateParts[1]:'',
        dy : dateParts?dateParts[2]:'',
      },

      timeIn : {

        houre:timeParts?timeParts[0]:'',
        minute:timeParts?timeParts[1]:'',
        second:'00'

      },


      guestName : guestName,
      adjectiveId : adjectiveId,
      hostId : hostId,
      userId : userId,
      pidNumber :pidNumber,
      guestType :guestType,
      agencyId : agencyId


    }


    return this.JsonData = requestBody

  }


// ********************************





    GuestFormUpDate : FormGroup = this._FormBuilder.group ({

      Id : [this.GuestID],
      guestName: ['' , [Validators.required]],
      adjectiveId: ['' , [Validators.required]],
      hostId: ['' , [Validators.required]],
      agencyId: ['' , [Validators.required]],
      userId: ['' , [Validators.required]],
      pidNumber: ['' , [Validators.required]],
      guestType: ['' , [Validators.required]],
      dateIn: ['' , [Validators.required]],
      timeIn: ['' , [Validators.required]],
    // GuestState: ['' , [Validators.required]],
    // TimeOut: ['' , [Validators.required]],
    // GuestChecked: ['' , [Validators.required]],

  })

  patchName() {
    this.GuestFormUpDate.get("Id")?.setValue(this.GuestID);

   }

  // **************************************

  cli(id:any):void {
    console.log( this.GuestID = id );
   }

  // ****************** UPDATE تحويل التاريخ و الوقت
  JsonDataUpdata:any = {};
  sendDateTimeUpdata():any {

    let Id = this.GuestFormUpDate.controls['Id'].value;
    let dateValue = this.GuestFormUpDate.controls['dateIn'].value;
    let timeValue = this.GuestFormUpDate.controls['timeIn'].value;
    let guestName = this.GuestFormUpDate.controls['guestName'].value;
    let adjectiveId = this.GuestFormUpDate.controls['adjectiveId'].value;
    let hostId = this.GuestFormUpDate.controls['hostId'].value;
    let agencyId = this.GuestFormUpDate.controls['agencyId'].value;
    let userId = this.GuestFormUpDate.controls['userId'].value;
    let pidNumber = this.GuestFormUpDate.controls['pidNumber'].value;
    let guestType = this.GuestFormUpDate.controls['guestType'].value;



    const dateParts = dateValue?dateValue.split('-'):null;
    const timeParts = timeValue?timeValue.split(':'):null;


    let requestBody = {

      dateIn: {
        yr : dateParts?dateParts[0]:'',
        mnth : dateParts?dateParts[1]:'',
        dy : dateParts?dateParts[2]:'',
      },

      timeIn : {

        houre:timeParts?timeParts[0]:'',
        minute:timeParts?timeParts[1]:'',
        second:'00'

      },

      Id : Id,
      guestName : guestName,
      adjectiveId : adjectiveId,
      hostId : hostId,
      userId : userId,
      pidNumber :pidNumber,
      guestType :guestType,
      agencyId : agencyId


    }

    return this.JsonDataUpdata = requestBody

  }


// ********************************




  ngOnInit(): void {

     // ********************

     this.getAllGuest();

     // *******************

      const today = new Date();
      this.minDate =today.toISOString().split('T')[0]

      this.getday()



      this.getAllAdjective();

      this.getAllAgency();

      this.getAllHost();

  }



getday ():void {

  const datePicker:any = document.getElementById("datePicker");

  datePicker?.addEventListener("input", function() {

    const dateValue = new Date(datePicker.value);
    const day = dateValue.getUTCDay();
    const data = dateValue.getUTCDate();
    const mohant = dateValue.getMonth();


      if ( day === 5) { // 5 = friday

          alert("اجازة الجمعة");

          console.log(day);
          datePicker.value = ""; // Clear the value if it's a weekend

      }else {
          console.log(day)
      }

      if (mohant === 1 && data === 17) { // 2 mohant

        alert("عيد الثورة الليبية");

        console.log(day);
        datePicker.value = ""; // Clear the value if it's a weekend

      }  else if  (mohant === 4 && data === 1) { // 5 mohant

        alert("عيد العمال");

        console.log(day);
        datePicker.value = ""; // Clear the value if it's a weekend

      } else if  (mohant === 8 && data === 16) { // 9 mohant

        alert("يوم الشهيد");

        console.log(day);
        datePicker.value = ""; // Clear the value if it's a weekend

      } else if  (mohant === 9 && data === 23) { // 10 mohant

        alert("عيد التحرير");

        console.log(day);
        datePicker.value = ""; // Clear the value if it's a weekend

      } else if  (mohant === 11 && data === 24) { // 12 mohant

        alert("عيد الاستقلال");

        console.log(day);
        datePicker.value = ""; // Clear the value if it's a weekend

      }
       else {

        console.log(mohant);

      }




  });

}


dataInput():void {

  console.log(this.disabledDates)

  this.getday();

  // this._ToastrService.success("عطلة الجمعة");

}


handleFormAdd():void {

  let userData  = this.sendDateTime();

  console.log(userData);

  this._GuestService.AddGuest(userData).subscribe({

    next: (response) => {

      console.log(response);
      this.Guest = response
      this._ToastrService.success("تم الاضافة");
      this.getAllGuest();
      this.cler();
      // this._Router.navigate(['/agency']);

    }, error: (err) => {

      this._ToastrService.error("Error");
      console.log(err);
      this.cler();

    }

  })

}


handleFormUpdate():void {

  let userData  = this.sendDateTimeUpdata();

  console.log(userData);


  this._GuestService.UpdateGuest(userData).subscribe({

    next : (response) => {

       console.log(response)
       this.Guest = response
       this._ToastrService.warning("تم التعديل");

       this.getAllGuest();
       this.cler();

    },error: (err) => {

      console.log(err);
      this._ToastrService.error("لم يتم التنفيذ");
      this.cler();

    }



  });


}



  getAllGuest() :void {

    this._GuestService.GetAllGuest().subscribe({

      next: (response) => {

        console.log(response);
        this.Guest = response

      },
      error: (err) => {

        console.log(err);
        this._ToastrService.error("Error");


      }



    })

  }

  // ************************

  getAllAdjective(): void {

    this._AdjectiveService.GetAllAdjective().subscribe({

      next: (response) => {

        console.log(response);
        this.Adjective = response

      },
      error: (err) => {

        console.log(err);
        this._ToastrService.error("Error");


      }

    });

  }


  getAllAgency() :void {

    this._AgencyService.GetAllAgency().subscribe({

      next: (response) => {

        console.log(response);
        this.Agency = response

      },
      error: (err) => {

        console.log(err);
        this._ToastrService.error("Error");


      }



    })

  }


  getAllHost() :void {

    this._HostService.GetAllHost().subscribe({

      next: (response) => {

        console.log(response);
        this.Host = response

      },
      error: (err) => {

        console.log(err);
        this._ToastrService.error("Error");


      }



    })

  }



  cler(): void {

    this.GuestFormAdd.get("guestName")?.setValue("");
    this.GuestFormAdd.get("adjectiveId")?.setValue("");
    this.GuestFormAdd.get("hostId")?.setValue("");
    this.GuestFormAdd.get("agencyId")?.setValue("");
    this.GuestFormAdd.get("pidNumber")?.setValue("");
    this.GuestFormAdd.get("guestType")?.setValue("");
    this.GuestFormAdd.get("dt")?.setValue("");
    this.GuestFormAdd.get("tm")?.setValue("");


    this.GuestFormUpDate.get("guestName")?.setValue("");
    this.GuestFormUpDate.get("adjectiveId")?.setValue("");
    this.GuestFormUpDate.get("hostId")?.setValue("");
    this.GuestFormUpDate.get("agencyId")?.setValue("");
    this.GuestFormUpDate.get("pidNumber")?.setValue("");
    this.GuestFormUpDate.get("guestType")?.setValue("");
    this.GuestFormUpDate.get("dt")?.setValue("");
    this.GuestFormUpDate.get("tm")?.setValue("");



  }









  }
