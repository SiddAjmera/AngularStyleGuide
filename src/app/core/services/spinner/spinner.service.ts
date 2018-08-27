import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ISpinnerState } from './spinner.interface';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private spinnerSubject = new Subject<ISpinnerState>();

  spinnerState = this.spinnerSubject.asObservable();

  constructor() { }

  show() {
    this.spinnerSubject.next(<ISpinnerState>{ show: true });
  }

  hide() {
    this.spinnerSubject.next(<ISpinnerState>{ show: false });
  }

}
