
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { forkJoin, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ClassData, StudClass } from '../../../@core/interfaces/ecommerce/stud-class';

@Injectable()
export class ClassFormResolver implements Resolve<Observable<any>> {

  constructor(private classesService: ClassData,
    ) {}

  resolve(route: ActivatedRouteSnapshot) {
    return forkJoin([  route.params.id ? this.classesService.get(route.params.id) : of(this.getEmptyClass()),
     
      ]).pipe(map(([objclass]: [StudClass]) => {
     
      return {
        objclass,
       
      };
    }));
  }

  private getEmptyClass(): StudClass {
    return {
      id: undefined,
      className: '',
      description: '',
    };
  }
}
