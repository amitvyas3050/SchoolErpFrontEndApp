import {Component, OnDestroy, OnInit} from '@angular/core';
import {takeUntil, takeWhile} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {NbSidebarService, NbToastrService} from '@nebular/theme';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';
import { AppModuleData } from '../../@core/interfaces/ecommerce/app-module';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ClassData } from '../../@core/interfaces/ecommerce/stud-class';
import { StudClass } from '../../@core/interfaces/ecommerce/stud-class';
//import { MatTableDataSource,MatSort,MatPaginator } from '@angular/material';

enum OrderMode {
  EDIT = 'Edit',
  ADD = 'Add',
}

@Component({
  selector: 'ngx-academic-class',
  templateUrl: './academic-class.component.html',
  styleUrls: ['./academic-class.component.scss'],
})

export class AcademicClassComponent implements OnInit, OnDestroy {
  private alive = true;
  modules:any[];
  protected readonly unsubscribe$ = new Subject<void>();
  listData: MatTableDataSource<StudClass>;
  displayedColumns: string[] = ['className', 'description', 'actions'];
  //@ViewChild(MatSort) sort: MatSort;
  //@ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;


  constructor(
              private router: Router,
              private route: ActivatedRoute,
              private toastrService: NbToastrService,
              private classService: ClassData,
             ) {
              this.initModules();
          
  }
  initModules() {
   
  }
  ngOnInit(): void {
    // console.log('Home =>side barcollapsed');
    
    

    this.classService.get(1)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((order) => {
          //this.listData = new MatTableDataSource(order);
        });

    //this.listData = new MatTableDataSource(this.classService.get(1));
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


  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    //this.listData.filter = this.searchKey.trim().toLowerCase();
  }


}
