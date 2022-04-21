import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NbTagComponent } from '@nebular/theme';
import {MatListModule} from '@angular/material/list';
@Component({
  selector: 'ngx-select-modules',
  templateUrl: './select-modules.component.html',
  styleUrls: ['./select-modules.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectModulesComponent {
 itemCount:Number=0;
 modules:any[];
 selectedRole:string;

  constructor() {
    this.modules=[
      {id:1, name:'Admissions', bgColor:'basic', menuText:'Admissions', checked:true },
      {id:2, name:'Courses', bgColor:'primary', menuText:'Courses', checked:false},
      {id:3, name:'Attendances', bgColor:'success', menuText:'Attendances' , checked:true},
      {id:4, name:'Examinations', bgColor:'danger', menuText:'Examinations' , checked:true},
      {id:5, name:'Student Performances', bgColor:'info', menuText:'Student Performances' , checked:true},
      {id:6, name:'Teacher Performances', bgColor:'warning', menuText:'Teacher Performances' , checked:false},
      {id:7, name:'Sports Activities', bgColor:'info', menuText:'Student Performances' , checked:true},
      {id:8, name:'Other Activities', bgColor:'warning', menuText:'Teacher Performances' , checked:false},
      {id:9, name:'Time Table', bgColor:'info', menuText:'Student Performances' , checked:false},
      {id:10, name:'Fee Management', bgColor:'warning', menuText:'Teacher Performances', checked:true},
    ];
   
  }
  accordionClicked(id:number){
    console.log(id);
   
  }


}
