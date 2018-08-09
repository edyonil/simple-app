import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the AlertaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'alerta',
  templateUrl: 'alerta.html'
})
export class AlertaComponent {

  @Input('erro') erro = false;

  @Input('titulo') titulo = '';

  @Input('conteudo') conteudo = '';

  @Input('exibir') exibir = false;

  @Output('onClose') onClose = new EventEmitter;


  text: string;

  constructor() {
  }

  onCloseInterno() {
    //console.log('entrou');
    this.exibir = false;
    this.onClose.emit(false);
  }

}
