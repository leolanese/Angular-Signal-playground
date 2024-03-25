import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-vy-home',
  standalone: true,
  imports: [],
  templateUrl: './vy-home.component.html',
  styleUrl: './vy-home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VyHomeComponent {
  pageTitle = 'Home Component'
}
