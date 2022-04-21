/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import {Component, OnDestroy, OnInit} from '@angular/core';
import {ClassData, StudClass} from '../../../@core/interfaces/ecommerce/stud-class';
import {takeUntil} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {NbToastrService} from '@nebular/theme';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {DOUBLE_PATTERN} from '../../../@auth/components';
import {Subject} from 'rxjs';

enum AddEditMode {
  EDIT = 'Edit',
  ADD = 'Add',
}

@Component({
  selector: 'ngx-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss'],
})
export class ClassComponent implements OnInit, OnDestroy {
  classForm: FormGroup;

 mode: AddEditMode;
 objclass: StudClass;

  protected readonly unsubscribe$ = new Subject<void>();

  get className() {
    return this.classForm.get('className');
  }

  get description() {
    return this.classForm.get('description');
  }

  

  constructor(private classService: ClassData,
              private router: Router,
              private route: ActivatedRoute,
              private toastrService: NbToastrService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initClassForm();
    const id = this.route.snapshot.paramMap.get('id');
    this.loadClassData(id);
    this.initClassesData();

    if (this.objclass.id) {
      this.setViewMode(AddEditMode.EDIT);
    } else {
      this.setViewMode(AddEditMode.ADD);
    }

    
  }

  initClassesData() {
    const classData = this.route.snapshot.data.classData;
    this.objclass = classData.objclass;
   
  }

  loadClassData(id) {
    if (id) {
      this.classService.get(id)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((objclss) => {
          this.classForm.setValue({
            id: objclss.id,
            className: objclss.className ? objclss.className : '',
            description: objclss.description ? objclss.description : '',
            
          });
          // this is a place for value changes handling
          // this.userForm.valueChanges.pipe(takeUntil(this.unsubscribe$)).subscribe((value) => {   });
        });
    }
  }

  initClassForm() {
    this.classForm = this.fb.group({
      id: this.fb.control(undefined),
      className: this.fb.control('', [Validators.required]),
      description: this.fb.control(''),
    });
  }

  save() {
    this.objclass = this.classForm.value;
    
    // binding goes by country id, but we need to update name as well
    //this.order.country.name = this.countries.find(x => x.id === this.order.country.id).name;

    const observable = this.objclass.id
      ? this.classService.update(this.objclass)
      : this.classService.create(this.objclass);

    observable
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.toastrService.success('', `Item ${this.objclass.id ? 'updated' : 'created'}!`);
        this.back();
      });
  }

  back() {
    this.router.navigate(['/pages/classes/list']);
  }

  setViewMode(viewMode: AddEditMode) {
    this.mode = viewMode;
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
