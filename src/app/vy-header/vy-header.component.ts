import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'vy-header',
  standalone: true,
  imports: [ RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header>
      {{ pageTitle}}
    </header>
  `,
  styleUrl: './vy-header.component.scss'
})
export class VyHeaderComponent {
  pageTitle = 'Header';

  menuValue:boolean=false;
  menu_icon :string ='bi bi-list';
  openMenu(){
     this.menuValue =! this.menuValue ;
     this.menu_icon = this.menuValue ? 'bi bi-x' : 'bi bi-list';
   }
    closeMenu() {
     this.menuValue = false;
     this.menu_icon = 'bi bi-list';
   }
}
