import { Component, ViewChild } from '@angular/core';
import { NavController, MenuController, Tabs } from 'ionic-angular';
import { InternoPage } from '../interno/interno';
import { JusticaPage } from '../justica/justica';


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
    public menu: MenuController
  ) {
    this.menu.enable(true, 'menu1');

    
  }

}
