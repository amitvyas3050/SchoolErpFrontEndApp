
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { AuthModule } from '../../@auth/auth.module';

// components

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
} from '@nebular/theme';

import { ClassesRoutingModule } from './classes-routing.module';
import { ClassesComponent } from './classes.component';
import { ClassTableComponent } from './classes-table/classes-table.component';
import { ClassComponent } from './classaddedit/class.component';
import { ClassFormResolver } from './classaddedit/class.resolver';

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
    ClassesRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    ...NB_MODULES,
  ],
  declarations: [
    ClassesComponent,
    ClassTableComponent,
    ClassComponent,
  ],
  entryComponents: [
  ],
  providers: [
    ClassFormResolver,
  ],
})
export class ClassesModule { }
