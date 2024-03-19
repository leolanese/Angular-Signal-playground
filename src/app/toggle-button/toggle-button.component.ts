import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  standalone: true,
  imports: [],
  template: `
    <div class="toggle-container">
      <input type="checkbox" id="toggle" [(ngModel)]="isToggled">
      <label for="toggle"></label>
    </div>
    {{ label }} 
  `,
  styleUrl: './toggle-button.component.scss'
})
export class ToggleButtonComponent {
  @Input() isToggled: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() label: string = '';
}
