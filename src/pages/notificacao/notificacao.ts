import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NotificacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notificacao',
  templateUrl: 'notificacao.html',
})
export class NotificacaoPage {

  public itens = null;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
    
    this.itens = [
      {      
        resume: 'O processo 234567 necessita de um novo documento urgente',
        date: '23/12/2019',
      },
      {      
        resume: 'O processo 234567 necessita de um novo documento urgente',
        date: '23/12/2019',
      },
      {      
        resume: 'O processo 234567 necessita de um novo documento urgente',
        date: '23/12/2019',
      },
      {      
        resume: 'O processo 234567 necessita de um novo documento urgente',
        date: '23/12/2019',
      },
      {      
        resume: 'O processo 234567 necessita de um novo documento urgente',
        date: '23/12/2019',
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificacaoPage');
  }

}
