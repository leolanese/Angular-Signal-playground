import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Signal, inject, signal } from '@angular/core';
import { Transaction, Transactions } from '../models/vy-models';
import { BehaviorSubject, catchError, filter, forkJoin, map, Observable, of, shareReplay, skip, startWith, switchMap, tap, throwError } from 'rxjs';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';

@Injectable({providedIn: 'root'})
export class ApiTransactionService {
  // private apiUrl = 'http://localhost:8080/api/transactions';
  private apiUrl = 'http://localhost:3000/test-ui';

  http = inject(HttpClient);

  selectedFilters = signal<{ status: string, date: string }>({
    status: '',
    date: null
  });

    getFilteredTransactions = (page: number, pageSize: number,
                             status: string, dates: string)
                          : Observable<Transactions> => {

    let url = `${this.apiUrl}?page=${page}&pageSize=${pageSize}`;
    if (status) url += `&status=${status}`;
    if (dates) url += `&dates=${dates}`;

    return this.http.get<Transactions>(url).pipe(
      tap(_ => console.log(`GET request sent to ${url}`)),
      map((data: Transactions) => {
        return {
          totalNumberOfItems: data.totalNumberOfItems,
          numberOfPages: data.numberOfPages,
          currentPage: data.currentPage,
          pageSize: pageSize,
          hasNext: data.hasNext,

          items: data.items.map((item: Transaction) => {
            return {
              id: item.id,
              amount: item.amount,
              currency: item.currency,
              description: item.description,
              status: item.status,
              createdAt: item.createdAt
            };
          })
        };
      }),
      tap((formattedData) => console.log("Formatted data:", formattedData)),
      shareReplay(1),
      catchError(this.handleError)
    );
  }
  

  filteredTransactionsSignal: Signal<Transactions[]> = toSignal<Transactions[]>(
    this.getFilteredTransactions(1, 5, '', '').pipe(
        map((transactions: any) => {
          return transactions.items;
        }),
        startWith([]),
        skip(1)
      ),
      { initialValue: [] as any }
  );
  selectedFilteredTransactionSignal = signal<{ page: number, pageSize: number, status: string, dates: string }>({ page: 1, pageSize: 5, status: '', dates: '' });

  updateFilteredTransactions(page: number, pageSize: number, status: string, dates: string): void {
    console.log('api-transaction.service updateFilteredTransactions: ', { page, pageSize, status, dates })
    this.selectedFilteredTransactionSignal.set({ page, pageSize, status, dates });
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage: string;

    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else if (err.status === 0) {
      errorMessage = 'Server unreachable. Please check your internet connection or server status.';
    } else {
      errorMessage = `Server returned code: ${err.status}, error: ${err.error?.message || 'Unknown error'}`;
    }

    return throwError(() => errorMessage);
  }

}






