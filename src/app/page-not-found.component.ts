import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
  standalone: true,
  template: `
    <h1>404 page</h1>
    `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageNotFoundComponent {

}
