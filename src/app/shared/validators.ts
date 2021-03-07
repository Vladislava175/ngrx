import {AbstractControl} from '@angular/forms';
import {isNumeric} from 'rxjs/internal-compatibility';

export const validateWhitespace = (control: AbstractControl) => {
    let isWhitespace = (control.value || '').trim().length === 0;
    let isValid = !isWhitespace;
    return isValid ? null : {trimmed: true};
};
export const validatePhone = (control: AbstractControl) => {
    debugger
    let val = (control.value || '');
    if (val.length < 5 && val !== '9725') {
        control.setValue('9725');
        return false;
    }
    if (val.length > 13) {
        control.setValue(val.substr(0, 12));
        return false;
    }
    const lastCharacter = val.split('').pop();
    if (!isNumeric(+lastCharacter)) {
        control.setValue(val.slice(0, -1));
        return false;
    }
    if (val.length == 13) {
        return true;
    }
    return null;
};
