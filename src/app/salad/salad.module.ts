import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { SaladPageComponent } from './salad-page/salad-page.component';
import { SaladState } from './state/salad.state';

const routes: Routes = [
  {path: 'order', component: SaladPageComponent}

];
@NgModule({
  declarations: [SaladPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxsModule.forFeature([SaladState])
  ]
})
export class SaladModule { }
