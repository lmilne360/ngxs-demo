import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { StartOver } from '../state/salad.actions';
import { SaladState, SaladStateModel } from '../state/salad.state';

@Component({
  selector: 'app-salad-page',
  templateUrl: './salad-page.component.html',
  styleUrls: ['./salad-page.component.scss']
})
export class SaladPageComponent implements OnInit {

  @Select(SaladState.getDressing) dressing$: Observable<string>;
  @Select() salad$: Observable<SaladStateModel>;
  @Select(state => state.salad.price) price$: Observable<number>;

  constructor(private store: Store) {}
  ngOnInit() {
  }

  startOver() {
    this.store.dispatch(StartOver);
  }

}
