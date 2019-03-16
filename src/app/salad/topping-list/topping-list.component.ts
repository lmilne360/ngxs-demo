import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AddTopping } from './../state';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'topping-list',
  templateUrl: './topping-list.component.html',
  styleUrls: ['./topping-list.component.scss']
})
export class ToppingListComponent {

 choices = [
    'Olives',
    'Tomatoes',
    'Croutons',
    'Pickles',
    'Shrimp',
    'Pepitas',
    'Carrots'
  ];


  @Select(state => state.salad.toppings) toppings$;
  constructor(private store: Store) { }

  add(name) {
    this.store.dispatch(new AddTopping(name));
  }

}
