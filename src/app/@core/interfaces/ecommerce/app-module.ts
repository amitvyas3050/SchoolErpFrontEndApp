
import { Observable } from 'rxjs';
import { Country } from '../common/countries';
import { GridData } from '../common/gridData';
import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';

export interface AppModule {
  id: number;
  name: string;
  menuText: string;
  menuIcon: string;
  bgColor1: string;
  bgColor2: string;
}

export abstract class AppModuleData {
  abstract get gridDataSource(): DataSource;
  abstract list(pageNumber: number, pageSize: number): Observable<GridData<AppModule>>;
  abstract get(id: number): Observable<AppModule>;
  abstract getAll(): Observable<AppModule[]>;
  abstract update(module: AppModule): Observable<AppModule>;
  abstract create(module: AppModule): Observable<AppModule>;
  abstract delete(id: number): Observable<boolean>;
}
