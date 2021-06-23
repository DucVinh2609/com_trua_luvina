import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChonMonComponent } from './pages/chon-mon/chon-mon.component';

const routes: Routes = [
  { path: 'chon-mon', component: ChonMonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
