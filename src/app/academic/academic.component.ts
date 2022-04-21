import { Component, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { NbTokenService } from '@nebular/auth';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';
import { AcademicMenu } from './academic-menu';


@Component({
  selector: 'ngx-academic',
  styleUrls: ['academic.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet style='padding: 0.25rem 0.25rem 0 !important; '></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class AcademicComponent implements OnDestroy {

  menu: NbMenuItem[];
  alive: boolean = true;

  constructor(
    private academicMenu : AcademicMenu,
    private sidebarService: NbSidebarService,
    private tokenService: NbTokenService,
  ) 
  {
    this.menu=[
      {
        title: 'ACADEMICS',
        icon: 'layout-outline',
        children: [
          { title: 'Class', link: '/academic/class', icon: 'car-outline', },
          { title: 'Section', link: '/academic/section', icon: 'award-outline', },
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
    this.academicMenu.getMenu()
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
