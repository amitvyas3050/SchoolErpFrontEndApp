import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdmissionComponent } from './admission.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { NotFoundComponent } from '../pages/miscellaneous/not-found/not-found.component';
import { StudentSessionComponent } from './student-session/student-session.component';


const routes: Routes = [{
  path: '',
  component: AdmissionComponent,
  children: [
    { path: 'registration', component: StudentRegistrationComponent, },
    { path: 'student-session', component: StudentSessionComponent, },
    { path: '', redirectTo: 'registration', },
    { path: '**', component: NotFoundComponent, },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmissionRoutingModule {
}
