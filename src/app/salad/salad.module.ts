import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { SaladPageComponent } from './salad-page/salad-page.component';
import { SaladState } from './state/salad.state';
import { ToppingListComponent } from './topping-list/topping-list.component';

const routes: Routes = [
  {path: 'order', component: SaladPageComponent}

];
@NgModule({
  declarations: [SaladPageComponent, ToppingListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxsModule.forFeature([SaladState])
  ]
})
export class SaladModule { }
