import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppModuleApi } from '../api/app-module.api';
import { AppModuleData, AppModule } from '../../../interfaces/ecommerce/app-module';
import { GridData } from '../../../interfaces/common/gridData';
import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';

@Injectable()
export class AppModuleService implements AppModuleData {

  constructor(private api: AppModuleApi) { }

  get gridDataSource(): DataSource {
    return this.api.moduleDataSource;
  }

  list(pageNumber: number = 1, pageSize: number = 10): Observable<GridData<AppModule>> {
    return this.api.list(pageNumber, pageSize);
  }

  get(id: number): Observable<AppModule> {
    return this.api.get(id);
  }

  getAll(): Observable<AppModule[]> {
    return this.api.getAll();
  
  }

  create(module: any): Observable<AppModule> {
    return this.api.add(module);
  }

  update(module: any): Observable<AppModule> {
    return this.api.update(module);
  }

  delete(id: number): Observable<boolean> {
    return this.api.delete(id);
  }
}
