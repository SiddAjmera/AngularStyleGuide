import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ISpinnerState } from '../../services/spinner/spinner.interface';
import { LoggerService } from '../../services/logger/logger.service';
import { SpinnerService } from '../../services/spinner/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit, OnDestroy {

  visible = false;

  private spinnerStateChanged: Subscription;

  constructor(
    private loggerService: LoggerService,
    private spinnerService: SpinnerService
  ) { }

  ngOnInit() {
    console.log(this.visible);
    this.spinnerStateChanged = this.spinnerService.spinnerState
      .subscribe((state: ISpinnerState) => {
        this.visible = state.show;
        this.loggerService.log(`visible=${this.visible}`);
      });
  }

  ngOnDestroy() {
    this.spinnerStateChanged.unsubscribe();
  }

}
