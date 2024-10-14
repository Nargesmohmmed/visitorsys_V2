import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from 'src/app/components/footer/footer.component';


@Component({
  selector: 'app-nav-login',
  standalone: true,
  imports: [CommonModule , RouterOutlet , FooterComponent],
  templateUrl: './nav-login.component.html',
  styleUrls: ['./nav-login.component.css']
})
export class NavLoginComponent {

}
