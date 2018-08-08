import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AcompanhamentoHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acompanhamento-home',
  templateUrl: 'acompanhamento-home.html',
})
export class AcompanhamentoHomePage {

  public fases: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.fases = [
      {
        nome: 'Primeira fase',
        conteudo: 'Cadastro das informações Básicas',
        data: '23/12/2018',
        ativo: true
      },
      {
        nome: 'Segunda fase',
        conteudo: 'Envio de suas documentações',
        data: '24/12/2018',
        ativo: true
      },
      {
        nome: 'Terceira fase',
        conteudo: 'Analise por parte do contador',
        data: null,
        ativo: false
      },
      {
        nome: 'Quarta fase',
        conteudo: 'Assinatura final do advogado',
        data: null,
        ativo: false
      }

    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcompanhamentoHomePage');
  }

}
