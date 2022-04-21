
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassesComponent } from './classes.component';
import { ClassComponent } from './classaddedit/class.component';
import { ClassFormResolver } from './classaddedit/class.resolver';
import { ClassTableComponent } from './classes-table/classes-table.component';

const routes: Routes = [{
  path: '',
  component: ClassesComponent,
  children: [
    {
      path: 'list',
      component: ClassTableComponent,
    },
    {
      path: 'edit/:id',
      component: ClassComponent,
      resolve: { classData: ClassFormResolver },
    },
    {
      path: 'add',
      component: ClassComponent,
      resolve: { classData: ClassFormResolver },
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassesRoutingModule {

}
