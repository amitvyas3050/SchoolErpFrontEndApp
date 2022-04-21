/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import {Component, OnDestroy, OnInit} from '@angular/core';

import {takeUntil, takeWhile} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';

import {NbSidebarService, NbToastrService} from '@nebular/theme';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

import {Subject} from 'rxjs';
import { RolePermissionData } from '../../@core/interfaces/ecommerce/role-permission';

enum OrderMode {
  EDIT = 'Edit',
  ADD = 'Add',
}

@Component({
  selector: 'ngx-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss'],
})

export class HomeMenuComponent implements OnInit, OnDestroy {
  private alive = true;
  modules:any[];
  protected readonly unsubscribe$ = new Subject<void>();

  
  constructor(
              private rolePermissionService: RolePermissionData,
              private router: Router,
              private route: ActivatedRoute,
              private toastrService: NbToastrService,
             ) {
              //this.populateModules();
              this.initModules();
             
  }

  initModules() {
   

      this.rolePermissionService.gealltmodulesandfeatures(1)
      .pipe(takeWhile(() => this.alive))
      .subscribe(modules => {
        // this.modules = modules;
        console.log(this.modules);
        this.modules =modules;
      });
  }
  ngOnInit(): void {
    // console.log('Home =>side barcollapsed');
  }

  openLink(url: string){
    this.router.navigate([url]);
  }

  getBackgroundImage(mainColor:string, secColor :string) {
    return `linear-gradient( ${mainColor},${secColor})`;
}
  back() {
    this.router.navigate(['/pages/orders/list']);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  populateModules()
  {
    this.modules=[
      { 
        id: 1, name: 'Modules & Features', menuText: 'Modules & Features', 
        menuIcon: 'icon-home', bgColor1: '#0195ff', bgColor2: '#0195ff', navUrl:'/main/module-features',
        items:[
          { id: 1, name: 'Modules', menuText: 'Modules', menuIcon: 'icon-droplet', bgColor1: 'Red', bgColor2: 'gray',navUrl:'/main/module-features'},
          { id: 2, name: 'Features', menuText: 'Features', menuIcon: 'icon-images', bgColor1: 'green', bgColor2: 'red',navUrl:'/main/module-features'},
          { id: 1, name: 'Add Module', menuText: 'Add Module', menuIcon: 'icon-film', bgColor1: 'blue', bgColor2: 'HotPink',navUrl:'/main/module-features'},
          { id: 2, name: 'Add Feature', menuText: 'Add Features', menuIcon: 'icon-podcast', bgColor1: 'MediumVioletRed', bgColor2: 'red',navUrl:'/main/module-features'},
          { id: 1, name: 'Edit Modules', menuText: 'Edit Modules', menuIcon: 'icon-book', bgColor1: 'green', bgColor2: 'HotPink',navUrl:'/main/module-features'},
          { id: 2, name: 'Edit Features', menuText: 'Edit Features', menuIcon: 'icon-folder', bgColor1: 'MediumVioletRed', bgColor2: 'red',navUrl:'/main/module-features'},
       ]
      },
      { 
        id: 2, name: 'Rolewise Permisions', menuText: 'Rolewise Permisions', menuIcon: 'icon-profile', bgColor1: '#ff3d71', bgColor2: '#ff3d71',navUrl:'',
        items:[
          { id: 4, name: 'Modules & Features', menuText: 'Permission Add', menuIcon: 'icon-file-picture', bgColor1: 'red', bgColor2: 'blue',navUrl:''},
          { id: 5, name: 'Modules & Features', menuText: 'Edit Permission', menuIcon: 'icon-folder', bgColor1: 'DarkMagenta', bgColor2: 'red',navUrl:''},
          { id: 6, name: 'Modules & Features', menuText: 'Delete Permission', menuIcon: 'icon-paste', bgColor1: 'red', bgColor2: 'blue',navUrl:''},
        ]
      },
      { 
        id: 3, name: 'Academic', menuText: 'Academic', menuIcon: 'icon-alarm', bgColor1: '#fbbc05', bgColor2: '#fbbc05',navUrl:'/academic/class',
        items:[
          { id: 7, name: 'Class', menuText: 'Class', menuIcon: 'icon-calendar', bgColor1: 'red', bgColor2: 'blue',navUrl:'/academic/class'},
          { id: 8, name: 'Section', menuText: 'Section', menuIcon: 'icon-upload', bgColor1: 'blue', bgColor2: 'red',navUrl:'/academic/section'},
          { id: 9, name: 'Class Category', menuText: 'Class Category', menuIcon: 'icon-database', bgColor1: 'DarkMagenta', bgColor2: 'blue',navUrl:'/admission/student-session'},
          { id: 10, name: 'Class Setup', menuText: 'Class Setup', menuIcon: 'icon-database', bgColor1: 'DarkMagenta', bgColor2: 'blue',navUrl:'/admission/student-session'},
          { id: 11, name: 'Department Master', menuText: 'Department Master', menuIcon: 'icon-database', bgColor1: 'DarkMagenta', bgColor2: 'blue',navUrl:'/admission/student-session'},
          { id: 12, name: 'Contact List', menuText: 'Contact List', menuIcon: 'icon-database', bgColor1: 'DarkMagenta', bgColor2: 'blue',navUrl:'/admission/student-session'},
          { id: 13, name: 'Setup Master', menuText: 'Setup Master', menuIcon: 'icon-database', bgColor1: 'DarkMagenta', bgColor2: 'blue',navUrl:'/admission/student-session'},
        ]
      },
      { 
        id: 4, name: 'Admission', menuText: 'Admission', menuIcon: 'icon-alarm', bgColor1: '#00d690', bgColor2: '#00d690',navUrl:'/admission/registration',
        items:[
          { id: 14, name: 'Student Registration', menuText: 'Student Registration', menuIcon: 'icon-calendar', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          { id: 15, name: 'Student Session', menuText: 'Student Session', menuIcon: 'icon-upload', bgColor1: 'blue', bgColor2: 'red',navUrl:'/admission/student-session'},
          { id: 16, name: 'RollNumber Allotment', menuText: 'RollNumber Allotment', menuIcon: 'icon-database', bgColor1: 'DarkMagenta', bgColor2: 'blue',navUrl:'/admission/student-session'},
          { id: 17, name: 'House Allotment', menuText: 'House Allotment', menuIcon: 'icon-database', bgColor1: 'DarkMagenta', bgColor2: 'blue',navUrl:'/admission/student-session'},
          { id: 18, name: 'TC Register', menuText: 'TC Register', menuIcon: 'icon-database', bgColor1: 'DarkMagenta', bgColor2: 'blue',navUrl:'/admission/student-session'},
        ]
      },
      { 
        id: 5, name: 'Teacher', menuText: 'Teacher', menuIcon: 'icon-alarm', bgColor1: '#ffaa01', bgColor2: '#ffaa01', navUrl:'/admission/registration',
        items:[
          { id: 19, name: 'Teachers', menuText: 'Teachers', menuIcon: 'icon-calendar', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          { id: 20, name: 'Teacher Reports', menuText: 'Teacher Reports', menuIcon: 'icon-upload', bgColor1: 'blue', bgColor2: 'red',navUrl:'/admission/student-session'},
          
        ]
      },
      { 
        id: 6, name: 'Student Attendance', menuText: 'Student Attendance', menuIcon: 'icon-alarm', bgColor1: '#8d8cf0', bgColor2: '#8d8cf0', navUrl:'/admission/registration',
        items:[
          { id: 21, name: 'Daily Attendance', menuText: 'Daily Attendance', menuIcon: 'icon-calendar', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          { id: 22, name: 'Student Attendance', menuText: 'Student Attendance', menuIcon: 'icon-upload', bgColor1: 'blue', bgColor2: 'red',navUrl:'/admission/student-session'},
          { id: 22, name: 'Student Attendance Report', menuText: 'Student Attendance Report', menuIcon: 'icon-upload', bgColor1: 'blue', bgColor2: 'red',navUrl:'/admission/student-session'},
        ]
      },
      { 
        id: 7, name: 'Fees', menuText: 'Fees', menuIcon: 'icon-calendar', bgColor1: '#8d8cf0', bgColor2: '#8d8cf0', navUrl:'/admission/registration',
        items:[
          { id: 	23	, name: 'Fees Category'	, menuText: 'Fees Category',menuIcon: 'icon-calendar', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          { id: 	24	, name: 'Fees Head'	, menuText: 'Fees Head',menuIcon: 'icon-upload', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          { id: 	25	, name: 'Fees Term'	, menuText: 'Fees Term',menuIcon: 'icon-images', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          { id: 	26	, name: 'Add Fee Structure'	, menuText: 'Add Fee Structure',menuIcon: 'icon-droplet', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          { id: 	27	, name: 'List Fee Structure'	, menuText: 'List Fee Structure',menuIcon: 'icon-upload', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          // { id: 	28	, name: 'Student List Fee Structure'	, menuText: 'Student List Fee Structure',menuIcon: 'icon-database', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          { id: 	29	, name: 'Fee Receipt'	, menuText: 'Fee Receipt',menuIcon: 'icon-book', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          // { id: 	30	, name: 'Fee Structure Report'	, menuText: 'Fee Structure Report',menuIcon: 'icon-images', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          // { id: 	31	, name: 'Student Paid/Dues Report'	, menuText: 'Student Paid/Dues Report',menuIcon: 'icon-calendar', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          // { id: 	32	, name: 'Fees Collection Report'	, menuText: 'Fees Collection Report',menuIcon: 'icon-upload', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          // { id: 	33	, name: 'Fees Collection Report 2'  	, menuText: '	Fees Collection Report 2',menuIcon: 'icon-podcast', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          // { id: 	34	, name: 'Fees Rebate Report'	, menuText: '	Fees Rebate Report',menuIcon: 'icon-database', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          // { id: 	35	, name: 'Fees Fine Reports'	, menuText: 'Fees Fine Reports',menuIcon: 'icon-calendar', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          // { id: 	36	, name: 'Fees Discount Reports'	, menuText: 'Fees Discount Reports',menuIcon: 'icon-images', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          // { id: 	37	, name: 'Student Fees Paid Status'	, menuText: 'Student Fees Paid Status',menuIcon: 'icon-droplet', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          // { id: 	38	, name: 'Student Fees [Head Wise] Report'  	, menuText: 'Student Fees [Head Wise] Report',menuIcon: 'icon-images', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},

        ]
      },
      { 
        id: 8, name: 'Exam', menuText: 'Exam', menuIcon: 'icon-calendar', bgColor1: '#ea4335', bgColor2: '#ea4335', navUrl:'/admission/registration',
        items:[
          { id: 	39	, name: 'Define Exam', menuText: 'Define Exam',menuIcon: 'icon-images', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          // { id: 	40	, name: 'Grade', menuText: 'Grade',menuIcon: 'icon-book', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          // { id: 	41	, name: 'Subject Level 1', menuText: 'Subject Level 1',menuIcon: 'icon-podcast', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          // { id: 	42	, name: 'Subject Level 2', menuText: 'Subject Level 2',menuIcon: 'icon-calendar', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          // { id: 	43	, name: 'Subject Level 3', menuText: 'Subject Level 3',menuIcon: 'icon-film', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          { id: 	44	, name: 'Exam Remark', menuText: 'Exam Remark',menuIcon: 'icon-book', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          // { id: 	45	, name: 'Class Subject Level', menuText: 'Class Subject Level',menuIcon: 'icon-calendar', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          { id: 	46	, name: 'Class Syllabus', menuText: 'Class Syllabus',menuIcon: 'icon-book', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          { id: 	47	, name: 'Subject Allotment', menuText: 'Subject Allotment',menuIcon: 'icon-book', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          { id: 	48	, name: 'Exam Syllabus', menuText: 'Exam Syllabus',menuIcon: 'icon-droplet', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          { id: 	49	, name: 'Exam Marks Entry ', menuText: 'Exam Marks Entry ',menuIcon: 'icon-calendar', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          // { id: 	50	, name: 'Export Subject Allotment', menuText: 'Export Subject Allotment',menuIcon: 'icon-book', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          // { id: 	51	, name: 'Exam Setup', menuText: 'Exam Setup',menuIcon: 'icon-book', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},

        ]
      },
      { 
        id: 9, name: 'Time Table', menuText: 'Time Table', menuIcon: 'icon-calendar', bgColor1: '#00d690', bgColor2: '#00d690', navUrl:'/admission/registration',
        items:[
          { id: 52, name: 'Time Schedule', menuText: 'Time Schedule', menuIcon: 'icon-calendar', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          { id: 53, name: 'Faculty Allotment', menuText: 'Faculty Allotment', menuIcon: 'icon-upload', bgColor1: 'blue', bgColor2: 'red',navUrl:'/admission/student-session'},
          
        ]
      },
      { 
        id: 10, name: 'SMS', menuText: 'SMS', menuIcon: 'icon-calendar', bgColor1: '#ffaa01', bgColor2: '#ffaa01', navUrl:'/admission/registration',
        items:[
          // { id: 	54	, name: 'Define SMS Type', menuText: 'Define SMS Type',menuIcon: 'icon-calendar', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          // { id: 	55	, name: 'Message Template', menuText: 'Message Template',menuIcon: 'icon-images', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          { id: 	56	, name: 'General SMS', menuText: 'General SMS',menuIcon: 'icon-images', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          // { id: 	57	, name: 'Religion SMS', menuText: 'Religion SMS',menuIcon: 'icon-images', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          // { id: 	58	, name: 'House SMS', menuText: 'House SMS',menuIcon: 'icon-calendar', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          { id: 	59	, name: 'Absentees SMS', menuText: 'Absentees SMS',menuIcon: 'icon-images', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          { id: 	60	, name: 'Student SMS', menuText: 'Student SMS',menuIcon: 'icon-images', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          { id: 	61	, name: 'Parent/Student-Wishes', menuText: 'Parent/Student-Wishes',menuIcon: 'icon-calendar', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          // { id: 	62	, name: 'Online Class Absentee SMS', menuText: 'Online Class Absentee SMS',menuIcon: 'icon-images', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          // { id: 	63	, name: 'Teacher SMS', menuText: 'Teacher SMS',menuIcon: 'icon-calendar', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          { id: 	64	, name: 'Fees Defaulter SMS', menuText: 'Fees Defaulter SMS',menuIcon: 'icon-images', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          // { id: 	65	, name: 'Send StudentID SMS', menuText: 'Send StudentID SMS',menuIcon: 'icon-images', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          // { id: 	66	, name: 'Send TeacherID SMS', menuText: 'Send TeacherID SMS',menuIcon: 'icon-calendar', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          { id: 	67	, name: 'Schedule General SMS', menuText: 'Schedule General SMS',menuIcon: 'icon-images', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          // { id: 	68	, name: 'Scheduler Parent/Student-Wishes', menuText: 'Scheduler Parent/Student-Wishes',menuIcon: 'icon-calendar', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          // { id: 	69	, name: 'Scheduler Teacher SMS', menuText: 'Scheduler Teacher SMS',menuIcon: 'icon-images', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          // { id: 	70	, name: 'Sent SMS Report', menuText:   'Sent SMS Report',menuIcon: 'icon-images', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          // { id: 	71	, name: 'SMS Log Data Export', menuText: 'SMS Log Data Export',menuIcon: 'icon-calendar', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          
        ]
      },
      { 
        id: 11, name: 'Utility', menuText: 'Utility', menuIcon: 'icon-calendar', bgColor1: '#ff3d71', bgColor2: '#ff3d71', navUrl:'/admission/registration',
        items:[
          { id: 72, name: 'Student Session Transfer', menuText: 'Student Session Transfer', menuIcon: 'icon-calendar', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          { id: 73, name: 'TC Allotment', menuText: 'TC Allotment', menuIcon: 'icon-upload', bgColor1: 'blue', bgColor2: 'red',navUrl:'/admission/student-session'},
          { id: 74, name: 'Student Session Transfer', menuText: 'Student Session Transfer', menuIcon: 'icon-upload', bgColor1: 'blue', bgColor2: 'red',navUrl:'/admission/student-session'},
        ]
      },
      { 
        id: 12, name: 'LFD', menuText: 'LFD', menuIcon: 'icon-calendar', bgColor1: '#3366ff', bgColor2: '#3366ff', navUrl:'/admission/registration',
        items:[
          { id: 75, name: 'Image Flyer Master', menuText: 'Image Flyer Master', menuIcon: 'icon-calendar', bgColor1: 'red', bgColor2: 'blue',navUrl:'/admission/registration'},
          { id: 76, name: 'Thoughts', menuText: 'Thoughts', menuIcon: 'icon-upload', bgColor1: 'blue', bgColor2: 'red',navUrl:'/admission/student-session'},
          { id: 77, name: 'Flyer Voice', menuText: 'Flyer Voice', menuIcon: 'icon-film', bgColor1: 'blue', bgColor2: 'red',navUrl:'/admission/student-session'},
          { id: 77, name: 'Flyer Master', menuText: 'Flyer Master', menuIcon: 'icon-images', bgColor1: 'blue', bgColor2: 'red',navUrl:'/admission/student-session'},
          { id: 77, name: 'Letter Head Master', menuText: 'Letter Head Master', menuIcon: 'icon-book', bgColor1: 'blue', bgColor2: 'red',navUrl:'/admission/student-session'},
          { id: 77, name: 'Topper Notice Board', menuText: 'Topper Notice Board', menuIcon: 'icon-book', bgColor1: 'blue', bgColor2: 'red',navUrl:'/admission/student-session'},
        ]
      },
    ]
  }
}

