import {Component, OnDestroy, OnInit} from '@angular/core';
import {takeUntil, takeWhile} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {NbSidebarService, NbToastrService} from '@nebular/theme';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';
import { AppModuleData } from '../../@core/interfaces/ecommerce/app-module';

enum OrderMode {
  EDIT = 'Edit',
  ADD = 'Add',
}

@Component({
  selector: 'ngx-student-session',
  templateUrl: './student-session.component.html',
  styleUrls: ['./student-session.component.scss'],
})

export class StudentSessionComponent implements OnInit, OnDestroy {
  private alive = true;
  modules:any[];
  protected readonly unsubscribe$ = new Subject<void>();

  
  constructor(
              private router: Router,
              private route: ActivatedRoute,
              private toastrService: NbToastrService,
             ) {
              this.initModules();
          
  }
  initModules() {
   
  }
  ngOnInit(): void {
    // console.log('Home =>side barcollapsed');
  }

  openLink(url: string){
    this.router.navigate([url]);
  }

  getBackgroundImage(mainColor:string, secColor :string) {
    return `linear-gradient( ${mainColor},${secColor})`;
}
  back() {
    this.router.navigate(['/pages/orders/list']);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
