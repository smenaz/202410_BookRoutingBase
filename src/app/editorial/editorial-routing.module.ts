import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EditorialListComponent } from './editorial-list/editorial-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: EditorialListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EditorialRoutingModule { }
