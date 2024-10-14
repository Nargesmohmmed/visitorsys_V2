import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavSetingComponent } from 'src/app/Layout/nav-seting/nav-seting.component';

@Component({
  selector: 'app-seting',
  standalone: true,
  imports: [CommonModule , NavSetingComponent],
  templateUrl: './seting.component.html',
  styleUrls: ['./seting.component.css']
})
export class SetingComponent {

}
