import {AbstractControl, ValidatorFn} from '@angular/forms';

export const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function validEmail(control: AbstractControl): { [key: string]: boolean } {
  if (!control.value || EMAIL_REGEX.test(control.value)) {
    return {};
  }
  return {invalidEmail: true};
}
