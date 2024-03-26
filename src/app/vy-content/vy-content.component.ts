import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TransactionContainerComponent } from '../transaction/transaction-container/transaction-container.component';

@Component({
  selector: 'vy-content',
  standalone: true,
  imports: [TransactionContainerComponent],
  template: `
    <main class="content">{{ componentTitle }}</main>
    
    <vy-transaction-container></vy-transaction-container>
  `,
  styleUrl: './vy-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VyContentComponent {
  componentTitle = 'Content Component';
}
