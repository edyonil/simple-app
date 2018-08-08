import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AcompanhamentoPage } from '../acompanhamento/acompanhamento';

/**
 * Generated class for the InternoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-interno',
  templateUrl: 'interno.html',
})
export class InternoPage {

  public itens: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.itens = [
      {
        action: "FGTS",
        date: "23/12/2019",
        resume: "Aguardando envio para o tribunal de justiça do trabalho"
      },
      {
        action: "FGTS",
        date: "23/12/2019",
        resume: "Aguardando envio para o tribunal de justiça do trabalho"
      },
      {
        action: "FGTS",
        date: "23/12/2019",
        resume: "Aguardando envio para o tribunal de justiça do trabalho"
      },
      {
        action: "FGTS",
        date: "23/12/2019",
        resume: "Aguardando envio para o tribunal de justiça do trabalho"
      },
      {
        action: "FGTS",
        date: "23/12/2019",
        resume: "Aguardando envio para o tribunal de justiça do trabalho"
      },
      {
        action: "TR",
        date: "23/12/2019",
        resume: "Aguardando envio para o tribunal de justiça do trabalho"
      }
    ]
  }

  show() {
    let modal = this.modalCtrl.create(AcompanhamentoPage);
    modal.present();
  }

}
