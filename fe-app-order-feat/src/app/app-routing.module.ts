import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyComponent } from './empty/empty.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';

const routes: Routes = [
  { path: 'orders/a', component: AComponent },
  { path: 'orders/b', component: BComponent },
  { path: '**', component: EmptyComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
