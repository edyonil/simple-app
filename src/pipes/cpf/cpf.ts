import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the CpfPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'cpf',
})
export class CpfPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {

    value = ("00000000000" + value).slice(-11);

    let a = value.slice(0, 3);
    let b = value.slice(3, 6);
    let c = value.slice(6, 9);
    let d = value.slice(9);

    value = `${a}.${b}.${c}-${d}`;

    return value;
  }
}
