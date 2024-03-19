import { HttpErrorResponse } from "@angular/common/http";
type TransactionStatus = 'CREATED' | 'FAILED' | 'SETTLED' | 'COMPLETED' | 'CAPTURED';

export interface Transactions {
    totalNumberOfItems: number
    numberOfPages: number
    currentPage: number
    pageSize: number
    hasNext: boolean
    items: Transaction[]
}
  
export interface Transaction {
    [x: string]: any;
    id: string
    amount: number
    currency: string
    description: string
    status: TransactionStatus
    createdAt: string
}

export interface ErrorResponse extends HttpErrorResponse {
    error: {
      message: string;
      description: string;
    }
}
  