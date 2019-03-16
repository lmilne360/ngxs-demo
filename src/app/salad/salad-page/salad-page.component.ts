import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SaladState } from '../state/salad.state';

@Component({
  selector: 'app-salad-page',
  templateUrl: './salad-page.component.html',
  styleUrls: ['./salad-page.component.scss']
})
export class SaladPageComponent implements OnInit {

  @Select(SaladState.getDressing) dressing$: Observable<string>;

  ngOnInit() {
  }

}
