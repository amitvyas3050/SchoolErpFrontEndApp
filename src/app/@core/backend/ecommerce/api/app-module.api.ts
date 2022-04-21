/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GridData } from '../../../interfaces/common/gridData';
import { AppModule } from '../../../interfaces/ecommerce/app-module';
import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { HttpService } from '../../common/api/http.service';

@Injectable()
export class AppModuleApi {
  private readonly apiController: string = 'modules';

  constructor(private api: HttpService) {}

  get moduleDataSource(): DataSource {
    return this.api.getServerDataSource(`${this.api.apiUrl}/${this.apiController}`);
  }

  list(pageNumber: number = 1, pageSize: number = 10): Observable<GridData<AppModule>> {
    const params = new HttpParams()
      .set('pageNumber', `${pageNumber}`)
      .set('pageSize', `${pageSize}`);

    return this.api.get(this.apiController, { params });
  }

  get(id: number): Observable<any> {
    return this.api.get(`${this.apiController}/${id}`);
  }

  getAll(): Observable<any[]> {
    return this.api.get(`${this.apiController}/getall`);
  }

  delete(id: number): Observable<any> {
    return this.api.delete(`${this.apiController}/${id}`);
  }

  add(item: any): Observable<any> {
    return this.api.post(this.apiController, item);
  }

  update(item: any): Observable<any> {
    return this.api.put(`${this.apiController}/${item.id}`, item);
  }
}
