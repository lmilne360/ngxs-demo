import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AppState, ConfirmOrder, Navigate, SetUsername } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Select() app$: Observable<AppState>; // selector, automatically selects slice of the store with the name 'app'
  // @Select( state => state.app) app$; // if the above is too magical you can pass a fuction and select the slice

  constructor(private store: Store) {}

/* This is how to dispatch actions */
  clickHandler(username) {
    this.store.dispatch([
      new SetUsername(username),
      new Navigate('salad/order')
    ]);
  }

  confirm() {
    this.store.dispatch(ConfirmOrder);
  }
}
