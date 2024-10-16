import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-blank',
  standalone: true,
  imports: [CommonModule,RouterLink , RouterLinkActive],
  templateUrl: './navbar-blank.component.html',
  styleUrls: ['./navbar-blank.component.css']
})
export class NavbarBlankComponent {

  constructor(private _Router:Router ) {}

  signOut():void {

    localStorage.removeItem('etoken');
    localStorage.removeItem('UserId');
    localStorage.removeItem('Role');
    this._Router.navigate(['/login']);

  }

}
