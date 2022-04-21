import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AcademicComponent } from './academic.component';
import { AcademicClassComponent } from './acedemic-class/academic-class.component';
import { NotFoundComponent } from '../pages/miscellaneous/not-found/not-found.component';
import { AcademicSectionComponent } from './acedemic-section/acedemic-section.component';


const routes: Routes = [{
  path: '',
  component: AcademicComponent,
  children: [
    { path: 'class', component: AcademicClassComponent, },
   { path: 'section', component: AcademicSectionComponent, },
    { path: '', redirectTo: 'class', },
    { path: '**', component: NotFoundComponent, },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcademicRoutingModule {
}
