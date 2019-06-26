import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableComponent } from './table/table.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {path: 'courses', component: TableComponent},
  {path: 'add', component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
