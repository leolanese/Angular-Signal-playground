import { Component } from '@angular/core';

@Component({
  selector: 'vy-side',
  standalone: true,
  imports: [],
  template: `
    <aside class="side">{{ componentTitle }}</aside>
  `,
  styleUrl: './vy-side.component.scss'
})
export class VySideComponent {
  componentTitle = 'Sidebar Component'
}
