import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';
import { NbAccordionModule, NbMenuModule, NbTagComponent, NbTagListComponent } from '@nebular/theme';
import { AuthModule } from '../@auth/auth.module';

import { MainPagesComponent } from './main-pages.component';
import { MainPagesRoutingModule } from './main-pages-routing.module';
import { HomeMenuComponent } from './menus/home-menu.component';
import { RolePermissionsComponent } from './role-permissions/role-permissions.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from "@angular/material/dialog";
import {MatCheckboxModule} from '@angular/material/checkbox';

import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
  NbSpinnerModule,
  NbDatepickerModule,

} from '@nebular/theme';
import { SelectModulesComponent } from './select-modules/select-modules.component';
import { AppModuleFeaturesComponent } from './app-module-features/app-module-features.component';


const  NB_MODULES = [
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbAccordionModule,
  NbInputModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
  NbSpinnerModule,
  NbDatepickerModule,
  NbInputModule,

];

const PAGES_COMPONENTS = [
  MainPagesComponent,
  HomeMenuComponent,
  RolePermissionsComponent,
  SelectModulesComponent,
 
];

@NgModule({
  imports: [
    MainPagesRoutingModule,
    ThemeModule,
    NbMenuModule,

    CdkAccordionModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatCheckboxModule,
    ...NB_MODULES,
    AuthModule.forRoot(),
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    
  ],
  providers: [
    
  ],
  entryComponents: []
})
export class MainPagesModule {

  
}
