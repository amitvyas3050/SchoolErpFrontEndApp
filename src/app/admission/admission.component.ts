import { Component, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { NbTokenService } from '@nebular/auth';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';
import { AdmissionMenu } from './admission-menu';


@Component({
  selector: 'ngx-admission',
  styleUrls: ['admission.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet style='padding: 0.25rem 0.25rem 0 !important; '></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class AdmissionComponent implements OnDestroy {

  menu: NbMenuItem[];
  alive: boolean = true;

  constructor(
    private admissionMenu : AdmissionMenu,
    private sidebarService: NbSidebarService,
    private tokenService: NbTokenService,
  ) 
  {
    this.menu=[
      {
        title: 'ADMISSIONS',
        icon: 'layout-outline',
        children: [
          { title: 'Student Registration', link: '/admission/registration', icon: 'car-outline', },
          { title: 'Student Session', link: '/admission/student-session', icon: 'award-outline', },
        ],
      },
    ];

    
    // this.initMenu();
    // this.sidebarService.expand();
    // this.tokenService.tokenChange()
    //   .pipe(takeWhile(() => this.alive))
    //   .subscribe(() => {
    //     this.initMenu();
    //   });
  }

  initMenu() {
    this.admissionMenu.getMenu()
      .pipe(takeWhile(() => this.alive))
      .subscribe(menu => {
        this.menu = menu;
        console.log(this.menu);
      });
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
