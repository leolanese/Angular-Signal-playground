import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'vy-header',
  standalone: true,
  imports: [ RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header>{{ pageTitle}}
      <nav class="navbar navbar-expand navbar-light bg-light">
      <a class="navbar-brand">{{pageTitle}}</a>
      <ul class="navbar-nav">

        <li class="nav-item">
          <a class="nav-link" href="#">home</a>
        </li>

        <li class="nav-item">
          <a class="nav-link"
            [routerLink]="[{ outlets: { outlet1Router: ['outlet1Path'] } }]"
            routerLinkActive="active">outlet1</a>
        </li>

        <li class="nav-item">
          <a class="nav-link"
            [routerLink]="[{ outlets: { outlet2Router: ['outlet2Path'] } }]"
            routerLinkActive="active">outlet2</a>
        </li>

        <li class="nav-item">
          <a class="nav-link"
            [routerLink]="['', { outlets: {outlet3: ['outlet3Path'] } }]"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact : true}">outlet3
          </a>
        </li>
        
      </ul> 
    </nav>    
   </header>
  `,
  styleUrl: './vy-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VyHeaderComponent {
  pageTitle = 'Header Component';

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
