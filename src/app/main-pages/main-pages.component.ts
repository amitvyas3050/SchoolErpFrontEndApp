/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { Component, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { NbTokenService } from '@nebular/auth';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';


@Component({
  selector: 'ngx-main-pages',
  styleUrls: ['main-pages.component.scss'],
  template: `
    <ngx-no-sidebar-layout>
      <router-outlet style='padding: 0.25rem 0.25rem 0 !important; '></router-outlet>
    </ngx-no-sidebar-layout>
  `,
})
export class MainPagesComponent implements OnDestroy {

  alive: boolean = true;

  constructor(
    private tokenService: NbTokenService,
  ) {
    this.initMenu();

    this.tokenService.tokenChange()
      .pipe(takeWhile(() => this.alive))
      .subscribe(() => {
        
      });
  }

  initMenu() {

    
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
