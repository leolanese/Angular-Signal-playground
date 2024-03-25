import { fetchEntity } from '../../services/fetchEntity';
import { Transaction } from './../../models/vy-models';
import { ChangeDetectionStrategy, Component, OnInit, Signal, computed, inject, signal } from '@angular/core';
import { TransactionListComponent } from "../transaction-list/transaction-list.component";
import { ApiTransactionService } from '../../services/api-transaction.service';
import { Observable, catchError, from, of, tap, throwError } from 'rxjs';
import { BananaboxComponent } from '../../bananabox/bananabox.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'vy-transaction-container',
  standalone: true,
  imports: [CommonModule, TransactionListComponent, BananaboxComponent],
  template: `
    <div>

    <h2>Entity instead Service with inject()</h2>
    <button (click)="onTriggerEntityFetch()">Trigger Entity Fetch</button>
    <div>{{ fetchEntity$ | async | json }}</div>

      <h3>Title: {{ title() }} - Counter: {{counter()}}</h3>
      <app-bananabox 
        [(title)]="title" 
        [(counter)]="counter" />

      <vy-transaction-list
        [ChildTransactions$]="ParentTransactions$"
        [ChildEmptyMessage]="ParentEmptyMessage"

        [ChildSignalTransactions]="ParentSignalTransactions"

        (ChildStatusChanged)="onStatusChanged($event)"
        (ChildDateChanged)="onDateChanged($event)"
        (ChildSelectedTransaction)="onSelectedTransactionFromList($event)" />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionContainerComponent implements OnInit {

  ParentTransactions$: Observable<any> | undefined;
  ParentSignalTransactions: Observable<any> | undefined;

  ParentEmptyMessage = 'Empty filter transaction message';
  ParentErrorMessage = '';

  statusValues: string[] = ['CREATED', 'FAILED', 'SETTLED', 'COMPLETED', 'CAPTURED'];
  selectedDate: Date | null = null;
  selectedStatus: string | null = '';

  // hardcode page size to 5
  currentPage = 1;
  pageSize = 5;

  // bananna in the box
  title = signal('');
  counter = signal(0);

  transactionService = inject(ApiTransactionService);

  // service and injector best practice:
  // no need a constructor in service and actually no need a service!
  protected fetchEntity$: Observable<any>;
  private _fetchEntity = fetchEntity();

  onTriggerEntityFetch(): void {
    this.fetchEntity$ = this._fetchEntity();
  }

  ngOnInit(): void {
    // Call filteredTransactionsSignal to populate ParentTransactions
    this.getObservableTransactions();

    this.getSignalTransactions()
  }

  getObservableTransactions = () => {
    this.ParentTransactions$ = from(this.transactionService.getFilteredTransactions(1, 5, 'CANCEL', ''))
  };

  getSignalTransactions = () => {
    this.ParentSignalTransactions = from(this.transactionService.filteredTransactionsSignal() as any) 
  }

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
