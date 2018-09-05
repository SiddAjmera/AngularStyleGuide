import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoggerService } from './services/logger/logger.service';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { NavComponent } from './components/nav/nav.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerService } from './services/spinner/spinner.service';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    LoggerService,
    SpinnerService
  ],
  declarations: [NavComponent, SpinnerComponent, HeaderComponent],
  exports: [HeaderComponent]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
