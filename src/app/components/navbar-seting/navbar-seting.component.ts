import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-seting',
  standalone: true,
  imports: [CommonModule ,RouterLink , RouterLinkActive],
  templateUrl: './navbar-seting.component.html',
  styleUrls: ['./navbar-seting.component.css']
})
export class NavbarSetingComponent {

}
