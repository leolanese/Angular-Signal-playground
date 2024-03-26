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
  imports: [
    CommonModule, 
    VyHeaderComponent, VyNavComponent, VyContentComponent, 
    VySideComponent, VyFooterComponent,
    RouterOutlet, RouterLink, RouterLinkActive,
  ],
  template: `
    <router-outlet name="outlet1Router">
      <div>
        <h1>outlet1</h1>
      </div>
    </router-outlet>  

    <router-outlet name="outlet2Router">
      <div>
        <h1>outlet2</h1>
      </div>
    </router-outlet>

    <router-outlet>
      <div class="container">
        <div>
          <h1>outlet0</h1>
        </div>
        <vy-header></vy-header> 
        <vy-nav></vy-nav>
        <vy-content>
            
        </vy-content>
        <vy-side></vy-side>
        <vy-footer></vy-footer>
      </div>
    </router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  componentTitle = 'App Component';
}
