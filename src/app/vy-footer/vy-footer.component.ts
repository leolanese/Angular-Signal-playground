import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'vy-footer',
  standalone: true,
  imports: [],
  template: `
    <footer>Footer Content</footer>
  `,
  styleUrl: './vy-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VyFooterComponent {

}
