import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'bool'})
export class BoolPipe implements PipeTransform {
  transform(value: boolean, exponent: string): boolean {
    return !value ? true : false;
  }
}
