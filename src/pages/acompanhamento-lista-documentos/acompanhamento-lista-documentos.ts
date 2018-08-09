import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AcompanhamentoListaDocumentosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acompanhamento-lista-documentos',
  templateUrl: 'acompanhamento-lista-documentos.html',
})
export class AcompanhamentoListaDocumentosPage {

  public items: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {
        path: "/assets/imgs/documento_1.jpg",
        tipo: "Carteira de identidade",
        data: "12/12/2018"
      },
      {
        path: "/assets/imgs/documento_2.jpg",
        tipo: "Contra Cheque",
        data: "12/12/2018"
      },
      {
        path: "/assets/imgs/documento_1.jpg",
        tipo: "Carteira de identidade",
        data: "12/12/2018"
      },
      {
        path: "/assets/imgs/documento_1.jpg",
        tipo: "Carteira de identidade",
        data: "12/12/2018"
      },
      {
        path: "/assets/imgs/documento_2.jpg",
        tipo: "Contra Cheque",
        data: "12/12/2018"
      },
      {
        path: "/assets/imgs/documento_1.jpg",
        tipo: "Carteira de identidade",
        data: "12/12/2018"
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcompanhamentoListaDocumentosPage');
  }

}
