import { Component, computed, effect, OnInit, signal, Signal } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'signal-behaviour',
  standalone: true,
  template: `
    <div>{{ signalA() }}</div>
    <div>{{ signalB() }}</div>
  `,
})
export class SignalBehaviour implements OnInit {
  // stable values
  // "Only use computed Signals and Signal effects if you only care about stable values that are actually 
  // rendered on the screen and want to act upon those values. If you want to log each update and the updates 
  // can happen fast (for example, handling each keystroke), a Signal will not be adecuate"
  // This is an intentional behaviour. Signals are designed to work with stable values and optimise
  // for efficient rendering: in other words, triggering .set() multiple times will batches 
  // the updates and process only the final value.

  signalA = signal('A1');
  signalB = signal('B1');

  computedValue = computed(() => {
    const signalA = this.signalA();
    const signalB = this.signalB();

    return `signalA: ${signalA}, signalB: ${signalB}`;
  });

  signalLoggingEffect = effect(() => {
    console.log(`Signal A: `, this.signalA()); // Logs: Signal A:  A4
    console.log(`Signal B: `, this.signalB()); // Logs: Signal B:  B4
    console.log(`computedValue(): ${JSON.stringify(this.computedValue())} `)
  });

  ngOnInit() {
    this.signalA.set('A2');
    this.signalB.set('B2');

    this.signalA.set('A3');
    this.signalB.set('B3');

    this.signalA.set('A4'); // only these 2 will be triggered
    this.signalB.set('B4'); // only these 2 will be triggered
  }
}
