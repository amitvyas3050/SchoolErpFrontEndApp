/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassesApi } from '../api/stud-classes.api';
import { ClassData,StudClass } from '../../../interfaces/ecommerce/stud-class';
import { GridData } from '../../../interfaces/common/gridData';
import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';

@Injectable()
export class ClassesService implements ClassData {

  constructor(private api: ClassesApi) { }

  get gridDataSource(): DataSource {
    return this.api.classesDataSource;
  }

  list(pageNumber: number = 1, pageSize: number = 10): Observable<GridData<StudClass>> {
    return this.api.list(pageNumber, pageSize);
  }

  get(id: number): Observable<StudClass> {
    return this.api.get(id);
  }

  // getall(): Observable<StudClass> {
  //   return this.api.get(id);
  // }

  create(objclass: any): Observable<StudClass> {
    return this.api.add(objclass);
  }

  update(objclass: any): Observable<StudClass> {
    return this.api.update(objclass);
  }

  delete(id: number): Observable<boolean> {
    return this.api.delete(id);
  }
}
