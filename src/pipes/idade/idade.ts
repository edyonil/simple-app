import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the IdadePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'idade',
})
export class IdadePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {

    if(value){
      let hoje = new Date;

      let hojeAno = hoje.getFullYear();
      let hojeMes = ("00"+(hoje.getMonth()+1)).slice(-2);
      let hojeDia = hoje.getDate();

      let aniversarioAno = value.substring(0,4);
      let aniversarioMes = value.substring(5,7);
      let aniversarioDia = value.substring(8,10);

      let niverAno = parseInt(aniversarioAno);
      let niverDia = parseInt(aniversarioDia);

      let Anos = 0;

      if(hojeMes == aniversarioMes && hojeDia > niverDia ){
        Anos = hojeAno - niverAno + 1;
      }else{
        Anos = hojeAno - niverAno;
      }

      return Anos;
    }
  }
}
