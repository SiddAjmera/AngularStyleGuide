import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggerService } from './services/logger/logger.service';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { NavComponent } from './components/nav/nav.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerService } from './services/spinner/spinner.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    LoggerService,
    SpinnerService
  ],
  declarations: [NavComponent, SpinnerComponent]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
