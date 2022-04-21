/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { NotFoundComponent } from '../pages/miscellaneous/not-found/not-found.component';

import { MainPagesComponent } from './main-pages.component';
import { HomeMenuComponent } from './menus/home-menu.component';
import { RolePermissionsComponent } from './role-permissions/role-permissions.component';
import { AppModuleFeaturesComponent } from './app-module-features/app-module-features.component';

const routes: Routes = [{
  path: '',
  component: MainPagesComponent,
  children: [
    { path: 'menus', component: HomeMenuComponent, },
    { path: 'permissions', component: RolePermissionsComponent, },
    { path: 'module-features', 
    loadChildren: () => import('./app-module-features/app-module-features.module').then(m => m.AppModuleFeaturesModule), },
    { path: '', redirectTo: 'menus', },
    { path: '**', component: NotFoundComponent, },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPagesRoutingModule {
}
