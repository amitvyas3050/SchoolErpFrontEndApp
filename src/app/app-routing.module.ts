import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './@auth/auth.guard';

const routes: Routes = [
  { path: 'pages', canActivate: [AuthGuard], loadChildren: () => import('app/pages/pages.module').then(m => m.PagesModule), },
  { path: 'main', canActivate: [AuthGuard], loadChildren: () => import('app/main-pages/main-pages.module').then(m => m.MainPagesModule), },
  { path: 'admission',canActivate: [AuthGuard], loadChildren: () => import('app/admission/admission.module').then(m => m.AdmissionModule), },
  { path: 'academic',canActivate: [AuthGuard], loadChildren: () => import('app/academic/academic.module').then(m => m.AcademicModule), },
  { path: 'auth', loadChildren: () => import('app/@auth/auth.module').then(m => m.AuthModule), },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
    useHash: false,
    relativeLinkResolution: 'legacy',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  
}
