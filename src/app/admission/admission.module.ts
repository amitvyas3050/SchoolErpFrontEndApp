/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { NgModule } from '@angular/core';

import { AdmissionComponent } from './admission.component';
import { AdmissionRoutingModule } from './admission-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from '../pages/miscellaneous/miscellaneous.module';
import { NbMenuModule } from '@nebular/theme';
import { AuthModule } from '../@auth/auth.module';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { StudentSessionComponent } from './student-session/student-session.component';
import { AdmissionMenu } from './admission-menu';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { FormsModule } from '@angular/forms';

const PAGES_COMPONENTS = [
  AdmissionComponent,
  StudentRegistrationComponent,
    StudentSessionComponent,
];

@NgModule({
  imports: [
    AdmissionRoutingModule,
    ThemeModule,
    NbMenuModule,
    MiscellaneousModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    AuthModule.forRoot(),
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
  providers: [
    AdmissionMenu
  ],
})
export class AdmissionModule {
  
}
