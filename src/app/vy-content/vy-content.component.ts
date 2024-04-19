import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PlaygroundContainerComponent } from '../transaction/playground-container/playground-container.component';

@Component({
  selector: 'vy-content',
  standalone: true,
  imports: [PlaygroundContainerComponent],
  template: `
    <main class="content">{{ componentTitle }}</main>
    
    <playground-container></playground-container>

    <hr />
  `,
  styleUrl: './vy-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VyContentComponent {
  componentTitle = 'Content Component';
}
