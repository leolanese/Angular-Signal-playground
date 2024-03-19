import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'vy-header',
  standalone: true,
  imports: [ RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './vy-header.component.html',
  styleUrl: './vy-header.component.scss'
})
export class VyHeaderComponent {
  pageTitle = 'Angular Vyne test';
}
