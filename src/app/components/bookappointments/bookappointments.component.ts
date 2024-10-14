import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBookappointmentsComponent } from 'src/app/Layout/nav-bookappointments/nav-bookappointments.component';

@Component({
  selector: 'app-bookappointments',
  standalone: true,
  imports: [CommonModule , NavBookappointmentsComponent],
  templateUrl: './bookappointments.component.html',
  styleUrls: ['./bookappointments.component.css']
})
export class BookappointmentsComponent {

}
