import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskPhone',
})
export class MaskPhonePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return value.slice(0, 1) + '*******' + value.slice(-2);
  }
}
