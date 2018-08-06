import { Component, ViewChild } from '@angular/core';
import { NavController, MenuController, Tabs, ModalController } from 'ionic-angular';
import { InternoPage } from '../interno/interno';
import { JusticaPage } from '../justica/justica';
import { NotificacaoPage } from '../notificacao/notificacao';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // @ViewChild('myTabs') tabRef: Tabs;

  // tab1 = InternoPage;
  // tab2 = JusticaPage;

  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public modalCtrl: ModalController
  ) {
    this.menu.enable(true, 'menu1');
  }

  public goTo() {

    let profileModal = this.modalCtrl.create(NotificacaoPage);

    profileModal.present();
}

}
