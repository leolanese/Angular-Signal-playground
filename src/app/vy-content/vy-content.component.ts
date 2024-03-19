import { Component } from '@angular/core';
import { TransactionContainerComponent } from '../transaction/transaction-container/transaction-container.component';

@Component({
  selector: 'vy-content',
  standalone: true,
  imports: [TransactionContainerComponent],
  templateUrl: './vy-content.component.html',
  styleUrl: './vy-content.component.scss'
})
export class VyContentComponent {

}
