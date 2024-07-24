
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MyCounterComponent } from "./my-counter/my-counter.component";
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyCounterComponent, AsyncPipe],
  template: `
  <app-my-counter></app-my-counter>
  `
})
export class AppComponent {
  count$: Observable<number>;
  count: number = 0;

  constructor(
    private store: Store<{ count: number }>
  ) {
    this.count$ = this.store.select("count");
    this.store.select("count").subscribe(res => {
      this.count = res;
    })
  }

}
