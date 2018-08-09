import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AcompanhamentoListaMensagensPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acompanhamento-lista-mensagens',
  templateUrl: 'acompanhamento-lista-mensagens.html',
})
export class AcompanhamentoListaMensagensPage {

  public mensagens: Array<any>;

  public user = '9090';

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.mensagens = [
      {
        user: {
          id: "12345678",
          nome: "Marcelo Vasconcelo"
        },
        data: "23/12/2018",
        conteudo: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde"
      },
      {
        user: {
          id: "9090",
          nome: "Bruno Lomba"
        },
        data: "23/12/2018",
        conteudo: "Texto da indústria tipográfica e de impressos, e vem sendo utilizado desde"
      },
      {
        user: {
          id: "12345678",
          nome: "Marcelo Vasconcelo"
        },
        data: "23/12/2018",
        conteudo: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica"
      },
      {
        user: {
          id: "9090",
          nome: "Marcelo Vasconcelo"
        },
        data: "23/12/2018",
        conteudo: "Obrigado pelo esclarecimento"
      },
      {
        user: {
          id: "9090",
          nome: "Bruno Lomba"
        },
        data: "23/12/2018",
        conteudo: "Lorem Ipsum sobreviveu não só a cinco séculos, como também"
      },
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcompanhamentoListaMensagensPage');
  }

}
