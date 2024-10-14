import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchGuestPipe } from 'src/app/shared/pipe/search-guest.pipe';
import { GuestService } from 'src/app/shared/services/guest.service';
import { ToastrService } from 'ngx-toastr';
import { Guest } from 'src/app/shared/interfaces/guest';

@Component({
  selector: 'app-visitorsys',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule , SearchGuestPipe , FormsModule],
  templateUrl: './visitorsys.component.html',
  styleUrls: ['./visitorsys.component.css']
})
export class VisitorsysComponent {

  constructor( private _GuestService:GuestService
    , private _ToastrService:ToastrService ,
  ) {}

  term:string = "";

  Guest:Guest []=[];

  ngOnInit(): void {

    this.getAllGuestByData();



  }



  getAllGuestByData() :void {

    this._GuestService.GetAllGuestByData().subscribe({

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
