import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPrintModule} from 'ngx-print';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchHostPipe } from 'src/app/shared/pipe/search-host.pipe';
import { HostService } from 'src/app/shared/services/host.service';
import { Host } from 'src/app/shared/interfaces/host';
import { ToastrService } from 'ngx-toastr';
import { GuestService } from 'src/app/shared/services/guest.service';
import { SearchGuestPipe } from 'src/app/shared/pipe/search-guest.pipe';
import { Guest } from 'src/app/shared/interfaces/guest';

@Component({
  selector: 'app-print',
  standalone: true,
  imports: [CommonModule , NgxPrintModule ,ReactiveFormsModule , SearchGuestPipe , FormsModule ],
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {


  constructor( private _GuestService:GuestService
    , private _ToastrService:ToastrService ,
  ) {}

  term:string = "";

  Guest:Guest []=[];

  ngOnInit(): void {

    this.getAllGuest();



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


}
