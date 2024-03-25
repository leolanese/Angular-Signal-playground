import { Transaction, Transactions } from './../../models/vy-models';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, Signal, computed, inject } from '@angular/core';
import { NgFor, NgClass, NgIf, CommonModule } from '@angular/common';
import { ApiTransactionService } from '../../services/api-transaction.service';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, Subscription, of, from, catchError, throwError, tap} from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'vy-transaction-list',
  standalone: true,
  imports: [CommonModule, FormsModule, NgClass, NgFor, NgIf, DatePipe, ReactiveFormsModule],
  styleUrl: './transaction-list.component.scss',
  templateUrl: './transaction-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionListComponent implements OnInit {
  pageTitle = 'Transaction List';
  filterForm: FormGroup;
  statusValues: string[] = ['CREATED', 'FAILED', 'SETTLED', 'COMPLETED', 'CAPTURED'];
  selectedDate: Date | null = null;
  selectedStatus: string | null = '';

  ChildSignalTransactionsFromObservable: Signal<any> | undefined;
  selectedBanana: string = 'initial banana';

  @Input() ChildEmptyMessage: string = '';
  @Input() ChildTransactions$!: Observable<any[]> | undefined;

  @Input() ChildSignalTransactions: Observable<any> | undefined;

  // old angular
  @Input() myValue: any;
  @Output() myValueChange = new EventEmitter<any>();
  
  @Input() bananaValue: string = '';
  @Output() bananaValueChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() bananaSelected: EventEmitter<string> = new EventEmitter<string>();
  
  @Output() ChildStatusChanged = new EventEmitter<string>();
  @Output() ChildDateChanged = new EventEmitter<string>();
  @Output() ChildSelectedTransaction = new EventEmitter<number>();

  transactionService = inject(ApiTransactionService);

  constructor(private fb:FormBuilder) {
    this.filterForm = this.fb.group({
      status: [null]
    });
  }

  ngOnInit(): void {
    // transform back to Signal, after passing it 
    this.ChildSignalTransactionsFromObservable = toSignal(this.ChildTransactions$, {rejectErrors: true}) as Signal<any> | undefined;
  }

  onBananaChange(newValue: string) {
    this.bananaValue = newValue;
    this.bananaValueChanged.emit(newValue);
  }

  // Observable table
  childData$ = from(this.transactionService.getFilteredTransactions(1, 5, 'CANCEL', '')).pipe(
    tap(data => console.log('Data from service:', data)),
    catchError(() => throwError(() => new Error('Error getting transactions')))
  );

  // from observable to Signal
  filteredTransactionsFromObservableToSignal = toSignal(this.childData$, {rejectErrors: true}) as Signal<any> | undefined;

  onStatusChanged(selectedStatus: string): void {
    console.log('Status filter changed in child: ', selectedStatus);

    this.selectedStatus = selectedStatus;
    this.ChildStatusChanged.emit(selectedStatus);
  }

  onDateChanged(dateValue: string): void {
    console.log('Date filter changed:', dateValue);

    this.selectedDate = new Date(dateValue);
    this.ChildDateChanged.emit(dateValue);
  }

  onSelectedTransactionFromList(id: number): void {
    console.log('Selected transaction:', id);

    this.ChildSelectedTransaction.emit(id);
  }


  // acted as a getter function
  filteredTransactionsSignal = () => {
    // TODO: Here we listen for Signal updates instead of subscribing to an observable
    // ideally we can move this to the smart component and subscribe to the observable there to make this
    // dummy component cleanner, but I rather keep it as is for now.
    return this.transactionService.filteredTransactionsSignal();
  };

  trackByStatus(index: number, item: string) {
    return `${item}-${index}`;
  }

}