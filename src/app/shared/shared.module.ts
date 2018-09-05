import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { FilterTextComponent } from './components/filter-text/filter-text.component';
import { FilterTextService } from './services/filter-text/filter-text.service';
import { InitCapsPipe } from './pipes/init-caps/init-caps.pipe';
import { ToastComponent } from './components/toast/toast.component';
import { UserLoginComponent } from './components/deeply/nested/user-login/user-login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FilterTextComponent,
    InitCapsPipe,
    ToastComponent,
    UserLoginComponent
  ],
  providers: [FilterTextService],
  exports: [
    CommonModule,
    FormsModule,
    FilterTextComponent,
    InitCapsPipe
  ]
})
export class SharedModule { }
