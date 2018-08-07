import { Component, ViewChild } from '@angular/core';
import { NavController, MenuController, Tabs, ModalController } from 'ionic-angular';
import { InternoPage } from '../interno/interno';
import { JusticaPage } from '../justica/justica';
import { NotificacaoPage } from '../notificacao/notificacao';
import { PerfilPage } from '../perfil/perfil';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // @ViewChild('myTabs') tabRef: Tabs;

  // tab1 = InternoPage;
  // tab2 = JusticaPage;

  public itens = {};

  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public modalCtrl: ModalController
  ) {
    this.menu.enable(true, 'menu1');

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
    ]
  }

  public goTo() {

    let profileModal = this.modalCtrl.create(NotificacaoPage);

    profileModal.present();
  }

  public goToPerfil(slug: string){
    let perfilModal = this.modalCtrl.create(PerfilPage, {
      slug: slug
    });

    perfilModal.present();
  }

}
