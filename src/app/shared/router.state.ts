import { Router } from '@angular/router';
import { Action, State, StateContext } from '@ngxs/store';

export class Navigate {
  static readonly type = '[router] navigate';
  constructor(public payload: string) {}
}

@State<string>({
  name: 'router',
  defaults: ''
})
export class RouterState {
  constructor(private router: Router) {}

  @Action(Navigate)
  async changeRoute(context: StateContext<string>, action: Navigate) {
    const path = action.payload;
    await this.router.navigate([path]);
    context.setState(path);
  }
}


// /* This is how to do it in the rxjs effects pattern */
// @Injectable()
// export class RouteHandler {
//  constructor(private router: Router, private actions$: Actions) {
//    this.actions$.pipe(ofAction(Navigate))
//    .subscribe(({payload}) => this.router.navigate([payload]));
//  }
// }
