import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddTopping, StartOver } from './salad.actions';

export interface SaladStateModel {
  dressing: string;
  price?: number;
  toppings: string[];
}

const defaults: SaladStateModel = {
  dressing: 'ranch',
  price: 9.99,
  toppings: []

};

@State<SaladStateModel>({
  name: 'salad',
  defaults
})
export class SaladState {

 /* This is how to create a selector in ngxs */
  @Selector()
  static getDressing(state: SaladStateModel) {
    return state.dressing.toLocaleUpperCase();
  }

  /* This is how you create an action reducer */
  @Action(AddTopping)
  addTopping(context: StateContext<SaladStateModel>, {payload}: AddTopping) {
    const currentState = context.getState();

    const toppings = [...currentState.toppings, payload];

    context.patchState({toppings, price: currentState.price + 0.5});
  }

  @Action(StartOver)
  reset({setState}: StateContext<SaladStateModel>) {
    setState({...defaults});
  }
}
