import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';

import { AuthModule } from '../../@auth/auth.module';

// components
import { AppModuleFeaturesComponent } from './app-module-features.component';
import { ComponentsModule } from '../../@components/components.module';
// resolvers

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
} from '@nebular/theme';

import { DialogModuleComponent } from './dialog-module/dialog-module.component';

const  NB_MODULES = [
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
  NbInputModule,
];

@NgModule({
  imports: [
    ThemeModule,
    AuthModule,
    Ng2SmartTableModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,

    ...NB_MODULES,
  ],
  declarations: [
    AppModuleFeaturesComponent,
    DialogModuleComponent,
    
  ],
  entryComponents: [
  ],
  providers: [
  ],
})
export class AppModuleFeaturesModule { 

}
