import { NbMenuItem } from '@nebular/theme';
import { NbAccessChecker } from '@nebular/security';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class AcademicMenu {

  constructor(private accessChecker: NbAccessChecker) {}

  getMenu(): Observable<NbMenuItem[]> {
   
    const adminMenu: NbMenuItem[]=[
      {
        title: 'ACADEMICS',
        icon: 'layout-outline',
        children: [
          { title: 'Class', link: '/academic/class', icon: 'car-outline', },
          { title: 'Section', link: '/academic/section', icon: 'award-outline', },
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
