import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/components/home/home.component';
import { RouterOutlet } from '@angular/router';
import { NavbarBlankComponent } from "../../components/navbar-blank/navbar-blank.component";

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [CommonModule, HomeComponent, RouterOutlet, NavbarBlankComponent],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.css']
})
export class NavBlankComponent {

}
