
import { Component } from '@angular/core';
import { AppModule, AppModuleData } from '../../@core/interfaces/ecommerce/app-module';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { DialogModuleComponent } from './dialog-module/dialog-module.component';

@Component({
  selector: 'ngx-module-features',
  templateUrl: './app-module-features.component.html',
  styleUrls: ['./app-module-features.component.scss'],
})
export class AppModuleFeaturesComponent {
  private alive = true;
  protected readonly unsubscribe$ = new Subject<void>();

  listModules : AppModule[];
  
  constructor(
    private dialogService: NbDialogService,
    private appModuleService: AppModuleData,
    private toastrService: NbToastrService) {
      this.initModules();
   
  }

  initModules() {
    this.appModuleService.getAll()
      .pipe(takeWhile(() => this.alive))
      .subscribe(modules => {
        this.listModules = modules;
        console.log(this.listModules);
        
      });
  }
  
  getBackgroundImage(mainColor:string, secColor :string) {
    return `linear-gradient( ${mainColor},${secColor})`;
  }

  AddNewModule() {
    this.dialogService.open( DialogModuleComponent, { context: { currModuleID:0 },
    });
  }


}
