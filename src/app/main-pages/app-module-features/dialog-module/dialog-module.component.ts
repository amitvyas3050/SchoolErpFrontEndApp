
import { Component } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { takeWhile } from 'rxjs/operators';


@Component({
  selector: 'ngx-dialog-module',
  templateUrl: './dialog-module.component.html',
  styleUrls: ['./dialog-module.component.scss'],
})
export class DialogModuleComponent {
    currModuleID:number=0;

  private alive = true;
  protected readonly unsubscribe$ = new Subject<void>();


  
  constructor(
    private dialogService: NbDialogService,
    private toastrService: NbToastrService) {
      
   
  }

  getBackgroundImage(mainColor:string, secColor :string) {
    return `linear-gradient( ${mainColor},${secColor})`;
  }




}
