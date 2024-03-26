import { NgIf } from '@angular/common';
import { Component, model, signal } from '@angular/core';

@Component({
  selector: 'app-html5-models',
  standalone: true,
  imports: [],
  template: `
      <h2>Updating Models with Directives using Signal</h2>
      <input src="" value="{{ placeholderChild() }}" />
      <textarea name="message" rows="5" cols="30" placeholder="{{ placeholderChild() }}"></textarea>
      <select name="country">
        <option value="" disabled>{{ placeholderChild() }}</option>
        <option value="usa">United States</option>
        <option value="canada">Canada</option>
        <option value="argentina">Argentina</option>
        <option value="australia">Australia</option>
      </select>
      <hr>
  `,
  styleUrl: './html5-models.component.scss'
})
export class Html5ModelsComponent {
  placeholderChild = model('Select an option');
  optionsChild = model<string[]>(['United States', 'Canada', 'India', 'Australia']);
}
