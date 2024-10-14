import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-navbar-bookappointments',
  standalone: true,
  imports: [CommonModule ,RouterLink , RouterLinkActive],
  templateUrl: './navbar-bookappointments.component.html',
  styleUrls: ['./navbar-bookappointments.component.css']
})
export class NavbarBookappointmentsComponent {

}
