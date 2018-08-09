import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcompanhamentoHomePage } from '../acompanhamento-home/acompanhamento-home';
import { AcompanhamentoListaDocumentosPage } from '../acompanhamento-lista-documentos/acompanhamento-lista-documentos';
import { AcompanhamentoListaMensagensPage } from '../acompanhamento-lista-mensagens/acompanhamento-lista-mensagens';
import { DocumentoPage } from '../documento/documento';

/**
 * Generated class for the AcompanhamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acompanhamento',
  templateUrl: 'acompanhamento.html',
})
export class AcompanhamentoPage {


  public habilitarBotaoMaisDocumento = false;

  public tabs = {
    primeira: {
      page: AcompanhamentoHomePage,
      title: 'Processo',
      icon: 'folder-open'
    },
    segunda: {
      page: AcompanhamentoListaMensagensPage,
      title: 'Mensagens',
      icon: 'mail'
    },
    terceira: {
      page: AcompanhamentoListaDocumentosPage,
      title: 'Documentos',
      icon: 'attach'
    },
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcompanhamentoPage');
  }

  onChangeTabs(event) {
    if(event.index == 2) {
      this.habilitarBotaoMaisDocumento = true;
    } else {
      this.habilitarBotaoMaisDocumento = false;
    }
  }

  maisDocumento() {
    this.navCtrl.push(DocumentoPage);
  }

}
