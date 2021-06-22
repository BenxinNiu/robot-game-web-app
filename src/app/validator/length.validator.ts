import {AbstractControl, ValidatorFn} from '@angular/forms';

export function validLength(min: number, max: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } => {
    if (!control.value ||
      (control.value.toString().length >= min &&
      control.value.toString().length <= max)) {
      return {};
    }
    return {invalidLength: true};
  };
}
