/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { AuthModule } from '../../@auth/auth.module';

import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatChipsModule} from '@angular/material/chips';

// components
import { RolePermissionsComponent } from './role-permissions.component';

import { ComponentsModule } from '../../@components/components.module';

// components

// modules
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
  NbAccordionModule,
  NbBadgeModule,
  NbCheckboxModule,
} 
from '@nebular/theme';

const  NB_MODULES = [
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
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
  NbBadgeModule,
  CdkAccordionModule,
];

@NgModule({
  imports: [
    ThemeModule,
    AuthModule,
    Ng2SmartTableModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatBadgeModule,
    MatChipsModule,
    ...NB_MODULES,
  ],
  declarations: [
    RolePermissionsComponent,
  ],
  entryComponents: [
  ],
  providers: [
  ],
})
export class RolePermissionsModule { }
