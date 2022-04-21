/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { Injectable } from '@angular/core';
import { ɵbq } from 'ng2-smart-table';
import { Observable } from 'rxjs';
import { GridData } from '../../../interfaces/common/gridData';
import { RoleModuleModel,AppFeaturModel,RolePermissionData, RolePermission } from '../../../interfaces/ecommerce/role-permission';
import { RolePermissionApi } from '../api/role-permission.api';

@Injectable()
export class RolePermissionService implements RolePermissionData {

  constructor(private api: RolePermissionApi) { }
  

  
  get gridDataSource(): ɵbq {
    throw new Error('Method not implemented.');
  }
  list(pageNumber: number, pageSize: number): Observable<GridData<RolePermission>> {
    throw new Error('Method not implemented.');
  }
  
  get(id: number): Observable<RolePermission> {
    throw new Error('Method not implemented.');
  }
  update(objclass: RolePermission): Observable<RolePermission> {
    throw new Error('Method not implemented.');
  }
  create(objclass: RolePermission): Observable<RolePermission> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Observable<boolean> {
    throw new Error('Method not implemented.');
  }

  gealltmodulesandfeatures(id: number): Observable<RoleModuleModel[]> {
    return this.api.gealltmodulesandfeatures(id);
  }

}
