import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'sg-app-game-setting',
  templateUrl: './game-setting.component.html',
  styleUrls: ['./game-setting.component.scss']
})
export class GameSettingComponent implements OnInit {
  @Input()
  formGroup: FormGroup;
  constructor() {
  }

  ngOnInit(): void {
  }

  isRequiredError(name: string): boolean {
    return this.formGroup?.get(name)?.getError('required');
  }

  get isEmailInvalidError(): boolean {
    return this.formGroup?.get('email')?.getError('invalidEmail');
  }

  get isValidNameError(): boolean {
    return this.formGroup?.get('name')?.getError('invalidLength');
  }
}
