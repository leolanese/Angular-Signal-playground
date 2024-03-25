import { fetchEntity } from '../../services/fetchEntity';
import { Transaction } from './../../models/vy-models';
import { ChangeDetectionStrategy, Component, OnInit, Signal, computed, inject, model, signal } from '@angular/core';
import { TransactionListComponent } from "../transaction-list/transaction-list.component";
import { ApiTransactionService } from '../../services/api-transaction.service';
import { Observable, catchError, from, of, tap, throwError } from 'rxjs';
import { BananaboxComponent } from '../../bananabox/bananabox.component';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../../pagination/pagination.component';
import { Html5ModelsComponent } from "../../html5-models/html5-models.component";

@Component({
    selector: 'vy-transaction-container',
    standalone: true,
    template: `
    <div>

      <app-html5-models
          [(placeholderChild)]="placeholderSignal"
           />

      <app-pagination 
          [(pageChild)]="currentPageSignal"
          (pageChange)="onChange($event)" />
 
      <h2>Entity instead Service with inject()</h2>
      <button (click)="onTriggerEntityFetch($event)">Trigger Entity Fetch</button>
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
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, TransactionListComponent,
        BananaboxComponent, PaginationComponent, Html5ModelsComponent]
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

  // Angular effortlessly manages bidirectional data binding between components
  // so I can even use: currentPageSignal = 1; 
  currentPageSignal = signal(1);

  // bananna in the box
  title = signal('');
  counter = signal(0);

  placeholderSignal = signal('Select something');

  transactionService = inject(ApiTransactionService);

  // service and injector best practice:
  // no need a constructor in service and actually no need a service!
  protected fetchEntity$: Observable<any>;
  private _fetchEntity = fetchEntity();
    placeholder: any;
    options: any;

  onTriggerEntityFetch(e): void {
    console.log('Trigger Entity Fetch', e);
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

  onChange(page: number) {
    console.log(`onChange:`, page)
  }
  
}
