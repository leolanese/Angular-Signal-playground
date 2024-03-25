import { Component, EventEmitter, Input, Output, model, signal } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  template: `
    <p>[{{ pageChild() }}] - [{{ page }}]</p>
  `
})
export class PaginationComponent {
  // Two-Way Binding to a Signal
  pageChild = model(1);

  @Input() page = 1;
  @Output() pageChange = new EventEmitter<number>();
}
