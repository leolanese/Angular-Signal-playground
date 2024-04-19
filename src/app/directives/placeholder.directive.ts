import { Directive, inject } from '@angular/core';
import { TransactionContainerComponent } from '../transaction/playground-container/playground-container.component';

@Directive({
    selector: '[appUsersOptions]',
    standalone: true,
  })
export class PaginationDirective {

    select = inject(TransactionContainerComponent)
  
    ngOnInit() {
      this.select.placeholder.set('Select a user');
  
      setTimeout(() => {
        this.select.options.set(['John', 'Jane', 'Doe']);
      }, 1000);
    }

}
