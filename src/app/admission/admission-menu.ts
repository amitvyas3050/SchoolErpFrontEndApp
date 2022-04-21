import { NbMenuItem } from '@nebular/theme';
import { NbAccessChecker } from '@nebular/security';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class AdmissionMenu {

  constructor(private accessChecker: NbAccessChecker) {}

  getMenu(): Observable<NbMenuItem[]> {
   
    const adminMenu: NbMenuItem[]=[
      {
        title: 'ADMISSIONS',
        icon: 'layout-outline',
        children: [
          { title: 'Student Registration', link: '/admission/registration', icon: 'car-outline', },
          { title: 'Student Session', link: '/admission/student-session', icon: 'award-outline', },
        ],
      },
    ];

    return this.accessChecker.isGranted('view', 'users')
      .pipe(map(hasAccess => {
        if (hasAccess) {
          return [...adminMenu,];
        } else {
          return [...adminMenu,];
        }
      }));
  }
}
