import { Transaction } from './../../models/vy-models';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { TransactionListComponent } from "../transaction-list/transaction-list.component";
import { ApiTransactionService } from '../../services/api-transaction.service';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Component({
  selector: 'vy-transaction-container',
  standalone: true,
  template: `
    <div>
        <vy-transaction-list
 
          [ChildTransactions]="ParentTransactions"
          [ChildEmptyMessage]="ParentEmptyMessage"

          (ChildStatusChanged)="onStatusChanged($event)"
          (ChildDateChanged)="onDateChanged($event)"
          (ChildSelectedTransaction)="onSelectedTransactionFromList($event)"
          
        ></vy-transaction-list>
    </div>
  `,
  imports: [TransactionListComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionContainerComponent {

  ParentTransactions: Transaction[] = [];
  ParentEmptyMessage = 'Empty filter transaction message';
  ParentErrorMessage = '';

  statusValues: string[] = ['CREATED', 'FAILED', 'SETTLED', 'COMPLETED', 'CAPTURED'];
  selectedDate: Date | null = null;
  selectedStatus: string | null = '';

  // hardcode page size to 5
  currentPage = 1;
  pageSize = 5;

  transactionService = inject(ApiTransactionService);

  onStatusChanged(selectedStatus: string): void {
    console.log('Status filter changed in parent: ', selectedStatus);

    this.selectedStatus = selectedStatus;
    this.fetchFilteredTransactions();
  }

  onDateChanged(dateValue: string): void {
    console.log('Date filter changed in parent:', dateValue);

    this.selectedDate = new Date(dateValue);
    this.fetchFilteredTransactions();
  }

  onSelectedTransactionFromList(id: number): void {
    console.log('Transaction row selected in parent: ', id);

    this.fetchFilteredTransactions();
  }

  fetchFilteredTransactions = (): void  => {
    this.transactionService.updateFilteredTransactions(
      this.currentPage,
      this.pageSize,
      this.selectedStatus,
      this.selectedDate ? this.selectedDate.toISOString() : null
    );
  };
  
}
