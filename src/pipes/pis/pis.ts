import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the PisPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'pis',
})
export class PisPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {

    //999.99999.99-9

    value = ("00000000000" + value).slice(-11);

    let a = value.slice(0, 3);
    let b = value.slice(3, 8);
    let c = value.slice(8, 10);
    let d = value.slice(10);

    value = `${a}.${b}.${c}-${d}`;

    return value;
  }
}
