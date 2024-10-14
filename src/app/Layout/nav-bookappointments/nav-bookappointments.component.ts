import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarBookappointmentsComponent } from 'src/app/components/navbar-bookappointments/navbar-bookappointments.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bookappointments',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarBookappointmentsComponent ],
  templateUrl: './nav-bookappointments.component.html',
  styleUrls: ['./nav-bookappointments.component.css']
})
export class NavBookappointmentsComponent {

constructor(private _Router:Router) {}

  Router :any;

  back():void{

    this.Router = this._Router.navigate(["/home"]);

  }

}
