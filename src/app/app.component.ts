import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VyHeaderComponent } from './vy-header/vy-header.component';
import { VyNavComponent } from './vy-nav/vy-nav.component';
import { VyContentComponent } from './vy-content/vy-content.component';
import { VySideComponent } from './vy-side/vy-side.component';
import { VyFooterComponent } from './vy-footer/vy-footer.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    VyHeaderComponent, VyNavComponent, VyContentComponent, 
    VySideComponent, VyFooterComponent,
    RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageTitle = 'Angular Vyne test';
}
