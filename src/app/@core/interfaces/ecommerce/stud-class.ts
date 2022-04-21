
import { Observable } from 'rxjs';
import { Country } from '../common/countries';
import { GridData } from '../common/gridData';
import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';

export interface StudClass {
  id: number;
  className: string;
  description: string;
  
}


export abstract class ClassData {
  abstract get gridDataSource(): DataSource;
  abstract list(pageNumber: number, pageSize: number): Observable<GridData<StudClass>>;
  abstract get(id: number): Observable<StudClass>;
  // abstract getall(): Observable<StudClass>;
  abstract update(objclass: StudClass): Observable<StudClass>;
  abstract create(objclass: StudClass): Observable<StudClass>;
  abstract delete(id: number): Observable<boolean>;
}
