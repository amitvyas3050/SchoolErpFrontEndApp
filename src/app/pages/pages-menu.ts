/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { NbMenuItem } from '@nebular/theme';
import { NbAccessChecker } from '@nebular/security';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class PagesMenu {

  constructor(private accessChecker: NbAccessChecker) {}

  getMenu(): Observable<NbMenuItem[]> {
    const dashboardMenu: NbMenuItem[] = [
      {
        //title: 'E-commerce',
        title: 'Dashboard',
        icon: 'shopping-cart-outline',
        link: '/pages/dashboard',
       children: undefined,
      },
    ];
    const homeMenu: NbMenuItem[] = [
      {
        //title: 'E-commerce',
        title: 'Home',
        icon: 'shopping-cart-outline',
        link: '/pages/home/menus',
        home: true,
        children: undefined,
      },
    ];
    const adminMenu: NbMenuItem[]=[
      {
        title: 'ADMIN',
        icon: 'layout-outline',
        children: [
          { title: 'App. Modules', link: '/pages/module/list', icon: 'car-outline', },
          { title: 'Rolewise Modules', link: '/pages/role-modules', icon: 'award-outline', },
        ],
      },
    ];
    const moduleMenu: NbMenuItem[] = [
      {
        title: 'Menus',
        icon: 'car-outline',
        link: '/pages/module/list',
        children: undefined,
      },
    ];

    const ordersMenu: NbMenuItem[] = [
      {
        title: 'Orders',
        icon: 'car-outline',
        link: '/pages/orders/list',
        children: undefined,
      },
    ];
    const classesMenu: NbMenuItem[] = [
      {
        title: 'Classes',
        icon: 'book',
        link: '/pages/classes/list',
        children: undefined,
      },
    ];
    const menu: NbMenuItem[] = [
      {
        title: 'FEATURES',
        group: true,
      },
      {
        title: 'Layout',
        icon: 'layout-outline',
        children: [
          {
            title: 'Stepper',
            link: '/pages/layout/stepper',
          },
          {
            title: 'List',
            link: '/pages/layout/list',
          },
          {
            title: 'Infinite List',
            link: '/pages/layout/infinite-list',
          },
          {
            title: 'Accordion',
            link: '/pages/layout/accordion',
          },
          {
            title: 'Tabs',
            pathMatch: 'prefix',
            link: '/pages/layout/tabs',
          },
        ],
      },
      {
        title: 'Forms',
        icon: 'edit-2-outline',
        children: [
          {
            title: 'Form Inputs',
            link: '/pages/forms/inputs',
          },
          {
            title: 'Form Layouts',
            link: '/pages/forms/layouts',
          },
          {
            title: 'Buttons',
            link: '/pages/forms/buttons',
          },
          {
            title: 'Datepicker',
            link: '/pages/forms/datepicker',
          },
        ],
      },
      {
        title: 'UI Features',
        icon: 'keypad-outline',
        link: '/pages/ui-features',
        children: [
          {
            title: 'Grid',
            link: '/pages/ui-features/grid',
          },
          {
            title: 'Icons',
            link: '/pages/ui-features/icons',
          },
          {
            title: 'Typography',
            link: '/pages/ui-features/typography',
          },
          {
            title: 'Animated Searches',
            link: '/pages/ui-features/search-fields',
          },
        ],
      },
      {
        title: 'Modal & Overlays',
        icon: 'browser-outline',
        children: [
          {
            title: 'Dialog',
            link: '/pages/modal-overlays/dialog',
          },
          {
            title: 'Window',
            link: '/pages/modal-overlays/window',
          },
          {
            title: 'Popover',
            link: '/pages/modal-overlays/popover',
          },
          {
            title: 'Toastr',
            link: '/pages/modal-overlays/toastr',
          },
          {
            title: 'Tooltip',
            link: '/pages/modal-overlays/tooltip',
          },
        ],
      },
      {
        title: 'Extra Components',
        icon: 'message-circle-outline',
        children: [
          {
            title: 'Calendar',
            link: '/pages/extra-components/calendar',
          },
          {
            title: 'Progress Bar',
            link: '/pages/extra-components/progress-bar',
          },
          {
            title: 'Spinner',
            link: '/pages/extra-components/spinner',
          },
          {
            title: 'Alert',
            link: '/pages/extra-components/alert',
          },
          {
            title: 'Calendar Kit',
            link: '/pages/extra-components/calendar-kit',
          },
          {
            title: 'Chat',
            link: '/pages/extra-components/chat',
          },
        ],
      },
      {
        title: 'Maps',
        icon: 'map-outline',
        children: [
          {
            title: 'Google Maps',
            link: '/pages/maps/gmaps',
          },
          {
            title: 'Leaflet Maps',
            link: '/pages/maps/leaflet',
          },
          {
            title: 'Bubble Maps',
            link: '/pages/maps/bubble',
          },
          {
            title: 'Search Maps',
            link: '/pages/maps/searchmap',
          },
        ],
      },
      {
        title: 'Charts',
        icon: 'pie-chart-outline',
        children: [
          {
            title: 'Echarts',
            link: '/pages/charts/echarts',
          },
          {
            title: 'Charts.js',
            link: '/pages/charts/chartjs',
          },
          {
            title: 'D3',
            link: '/pages/charts/d3',
          },
        ],
      },
      {
        title: 'Editors',
        icon: 'text-outline',
        children: [
          {
            title: 'TinyMCE',
            link: '/pages/editors/tinymce',
          },
          {
            title: 'CKEditor',
            link: '/pages/editors/ckeditor',
          },
        ],
      },
      {
        title: 'Tables & Data',
        icon: 'grid-outline',
        children: [
          {
            title: 'Smart Table',
            link: '/pages/tables/smart-table',
          },
          {
            title: 'Tree Grid',
            link: '/pages/tables/tree-grid',
          },
        ],
      },
      {
        title: 'Miscellaneous',
        icon: 'shuffle-2-outline',
        children: [
          {
            title: '404',
            link: '/pages/miscellaneous/404',
          },
        ],
      },
      {
        title: 'Auth',
        icon: 'lock-outline',
        children: [
          {
            title: 'Login',
            link: '/auth/login',
          },
          {
            title: 'Register',
            link: '/auth/register',
          },
          {
            title: 'Request Password',
            link: '/auth/request-password',
          },
          {
            title: 'Reset Password',
            link: '/auth/reset-password',
          },
        ],
      },
    ];
    const userMenu: NbMenuItem = {
      title: 'Users',
      icon: 'people-outline',
      link: '/pages/users/list',
      children: undefined,
    };
    return this.accessChecker.isGranted('view', 'users')
      .pipe(map(hasAccess => {
        if (hasAccess) {
          return [...dashboardMenu, ...adminMenu, ...homeMenu,...classesMenu,...moduleMenu, ...ordersMenu, userMenu, ...menu];
        } else {
          return [...dashboardMenu,...adminMenu, ...homeMenu,...classesMenu,...moduleMenu, ...ordersMenu, ...menu];
        }
      }));
  }
}
