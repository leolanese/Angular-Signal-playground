import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-vy-home',
  standalone: true,
  imports: [],
  template: `
    <div class="card">
    <div class="card-header bg-primary text-white">
      <h2 class="text-center">{{ pageTitle }}</h2>
    </div>
    <div class="card-body">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 text-center">
            <p class="lead"></p>
            <a href="#" class="btn btn-primary btn-lg">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  styleUrl: './vy-home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VyHomeComponent {
  pageTitle = 'Home Component'
}
