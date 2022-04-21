/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { Component, OnDestroy } from '@angular/core';

import { takeWhile } from 'rxjs/operators';
import { ClassData } from '../../../@core/interfaces/ecommerce/stud-class';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import {
  NgxFilterByNumberComponent,
} from '../../../@components/custom-smart-table-components/filter-by-number/filter-by-number.component';

@Component({
  selector: 'ngx-classes-table',
  templateUrl: './classes-table.component.html',
  styleUrls: ['./classes-table.component.scss'],
})
export class ClassTableComponent implements OnDestroy {

  private alive = true;

  settings = {
    mode: 'external',
    actions: {
      add: false,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
    },
    columns: {
      className: {
        title: 'Class Name',
        type: 'string',
      },
      description: {
        title: 'Description',
        type: 'string',
      },
    },
  };

  source: DataSource;

  constructor(private classService: ClassData,
    private router: Router,
    private toastrService: NbToastrService) {
    this.source = this.classService.gridDataSource;
  }

  addClass() {
    this.router.navigate(['/pages/classes/add/']);
  }

  onEdit($event: any) {
    this.router.navigate([`/pages/classes/edit/${$event.data.id}`]);
  }

  onDelete($event: any) {
    if (confirm('Are you sure wants to delete item?') && $event.data.id) {
      this.classService
        .delete($event.data.id)
        .pipe(takeWhile(() => this.alive))
        .subscribe((res) => {
          if (res) {
            this.toastrService.success('', 'Item deleted!');
            this.source.refresh();
          } else {
            this.toastrService.danger('', 'Something wrong.');
          }
        });
    }
  }

  ngOnDestroy() {
    this.alive = false;
  }

  private customDisplay(conditionValue: any, displayValue: string) {
    return conditionValue ? displayValue : '';
  }
}
