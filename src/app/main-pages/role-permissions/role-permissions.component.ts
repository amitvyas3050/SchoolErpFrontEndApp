import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { SelectModulesComponent } from '../select-modules/select-modules.component';


@Component({
  selector: 'ngx-role-permissions',
  templateUrl: './role-permissions.component.html',
  styleUrls: ['./role-permissions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class RolePermissionsComponent {
 itemCount:Number=0;
 roles:any[];
 items = ['Student', 'Class Teacher', 'Principle', 'Teacher', 'Accountant'];
 typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

 expandedIndex = 0;

 roleModules:any[];
 modules:any[];

 selectedRole:string;
 selectedModule:number;

  constructor(private dialog: MatDialog) {

    const dialogConfig = new MatDialogConfig();
      

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
    this.roleModules= [
      { id:1, name:'Student', 
        modules:[
          {id:1, name:'Admissions', bgColor:'basic', menuText:'Admissions'},
          {id:2, name:'Courses', bgColor:'primary', menuText:'Courses'},
          {id:3, name:'Attendances', bgColor:'success', menuText:'Attendances'},
        ]
      },
      { id:2, name:'Teacher', 
        modules:[
        {id:1, name:'Admissions', bgColor:'basic', menuText:'Admissions'},
        {id:2, name:'Courses', bgColor:'primary', menuText:'Courses'},
        {id:3, name:'Attendances', bgColor:'success', menuText:'Attendances'},
        {id:4, name:'Examinations', bgColor:'info', menuText:'Examinations'},
      ]
      },
      { id:3, name:'Class Teacher', 
      modules:[
      {id:1, name:'Admissions', bgColor:'basic', menuText:'Admissions'},
      {id:2, name:'Courses', bgColor:'primary', menuText:'Courses'},
      {id:3, name:'Attendances', bgColor:'success', menuText:'Attendances'},
      {id:4, name:'Examinations', bgColor:'danger', menuText:'Examinations'},
      {id:5, name:'Student Performances', bgColor:'info', menuText:'Student Performances'},
      {id:6, name:'Teacher Performances', bgColor:'warning', menuText:'Teacher Performances'},
      {id:7, name:'Sports Activities', bgColor:'info', menuText:'Student Performances' , checked:true},
      {id:8, name:'Other Activities', bgColor:'warning', menuText:'Teacher Performances' , checked:true},
      {id:9, name:'Time Table', bgColor:'info', menuText:'Student Performances' , checked:true},
      {id:10, name:'Fee Management', bgColor:'warning', menuText:'Teacher Performances', checked:true},
      ]
      },
      { id:3, name:'Parents', 
      modules:[
      {id:1, name:'Admissions', bgColor:'basic', menuText:'Admissions'},
      {id:4, name:'Examinations', bgColor:'danger', menuText:'Examinations'},
      {id:5, name:'Student Performances', bgColor:'info', menuText:'Student Performances'},
      {id:6, name:'Teacher Performances', bgColor:'warning', menuText:'Teacher Performances'},
      ]
      }
    ];
    
    this.itemCount= this.roleModules.length;
  }

  openModulesDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(SelectModulesComponent, dialogConfig);
}
  accordionClicked(id:number){
    console.log(id);
    this.selectedRole= this.roleModules.find(x=>x.id==id).name;
  }

  ModuleClicked(id:number){
    console.log(id);
    this.selectedModule= id;
  }

}
