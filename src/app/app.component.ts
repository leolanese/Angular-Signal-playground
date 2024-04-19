import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VyHeaderComponent } from './vy-header/vy-header.component';
import { VyNavComponent } from './vy-nav/vy-nav.component';
import { VyContentComponent } from './vy-content/vy-content.component';
import { VySideComponent } from './vy-side/vy-side.component';
import { VyFooterComponent } from './vy-footer/vy-footer.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SignalBehaviour } from "./signalBehaviour/signalBehaviour.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <router-outlet>
      <div class="container">
        <vy-nav />
        <vy-content />
        <vy-side />
        <vy-footer />
      </div>
    </router-outlet>
  `,
    styleUrls: ['./app.component.scss'],
    imports: [
        CommonModule,
        VyHeaderComponent, VyNavComponent, VyContentComponent,
        VySideComponent, VyFooterComponent,
        RouterOutlet, RouterLink, RouterLinkActive,
        SignalBehaviour
    ]
})
export class AppComponent {
  componentTitle = 'App Component';
}
