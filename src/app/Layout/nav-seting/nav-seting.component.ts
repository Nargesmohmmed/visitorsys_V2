import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarSetingComponent } from 'src/app/components/navbar-seting/navbar-seting.component';

@Component({
  selector: 'app-nav-seting',
  standalone: true,
  imports: [CommonModule , RouterOutlet , NavbarSetingComponent],
  templateUrl: './nav-seting.component.html',
  styleUrls: ['./nav-seting.component.css']
})
export class NavSetingComponent {

  constructor(private _Router:Router) {}

  Router :any;

  back():void{

    this.Router = this._Router.navigate(["/home"]);

  }

}
