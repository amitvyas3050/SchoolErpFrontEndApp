
import { Observable } from 'rxjs';
import { GridData } from '../common/gridData';
import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';

export interface RolePermission {
  id: number;
  roleId: number;
  moduleId: string;
  featureId: string;
  canAdd: string;
  CanEdit: string;
  CanDelete: string;
  CanView: string;
  

}


export interface RoleModuleModel {
  id: number;
  moduleId: number;
  name: string;
  menuText: string;
  menuIcon: string;
  bgColor1: string;
  bgColor2: string;
  navUrl: string;
  items : AppFeaturModel[];

}

export interface RoleModuleModel {
  id: number;
  moduleId: number;
  name: string;
  menuText: string;
  menuIcon: string;
  bgColor1: string;
  bgColor2: string;
  navUrl: string;
  items : AppFeaturModel[];

}

export interface AppFeaturModel {
  id: number;
  
  name: string;
  menuText: string;
  menuIcon: string;
  bgColor1: string;
  bgColor2: string;
  navUrl: string;

}


export abstract class RolePermissionData {
  
  abstract get gridDataSource(): DataSource;
  abstract list(pageNumber: number, pageSize: number): Observable<GridData<RolePermission>>;
  abstract get(id: number): Observable<RolePermission>;
  abstract update(objclass: RolePermission): Observable<RolePermission>;
  abstract create(objclass: RolePermission): Observable<RolePermission>;
  abstract delete(id: number): Observable<boolean>;

  abstract gealltmodulesandfeatures(id: number): Observable<RoleModuleModel[]>;
}
