import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'vy-nav',
  standalone: true,
  imports: [],
  template: `
    <nav>{{ componentTitle }}</nav>
  `,
  styleUrl: './vy-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VyNavComponent {
  componentTitle = 'nav component'
}
