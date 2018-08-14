import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AgendaVisualizarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agenda-visualizar',
  templateUrl: 'agenda-visualizar.html',
})
export class AgendaVisualizarPage {

  public item = {
    titulo: 'Reunião com a advogada Lenia',
    data: '14 de dezembro de 2018',
    horario: '08:45',
    previsao: 'Previsão de 1 hora de duração',
    novaCausa: 'Sim',
    tipo: 'Trabalhista',
    observacao: 'As promoções não são cumulativas. Compras feitas com cartões de crédito podem ser parceladas em até 10x sem juros, respeitando-se o valor da parcela mínima que estará disponível no momento do fechamento do pedido.'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaVisualizarPage');
  }

}
