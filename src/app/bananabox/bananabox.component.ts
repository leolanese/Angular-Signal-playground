import { ChangeDetectionStrategy, Component, EventEmitter, Output, model } from '@angular/core';

@Component({
  selector: 'app-bananabox',
  standalone: true,
  imports: [],
  template: `'
    <h2>signal-based 2-way data bindings with model()</h2>
    <button (click)="title.set('Leo')">
        Change title to Leo
    </button>
    <button (click)="onIncreaseCounter()">
        Increase counter
    </button>

    <hr />

    <h2>Signal-based components with model()</h2>
    <p>Checked value: {{ checked() }}</p>
    <button (click)="onToggle()">Click to toggle</button>  
    

    <hr />
  '`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BananaboxComponent {
  // title is a WritableSignal that enables 2-way data bindings
  // and requires the parent component to pass a default value
  title = model.required<string>();

  // age is a WritableSignal of type number with a default value of 0
  counter = model(0); 

  // cerated a model which is a writable signal that supports 2-way-binding
  checked = model(false)  

  onIncreaseCounter(): void {
    this.counter.update((counter) => counter + 1);
  }

  onToggle() {
    this.checked.update((checked) =>!checked);
  }

}
