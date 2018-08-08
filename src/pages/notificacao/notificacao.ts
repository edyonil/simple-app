import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DocumentoPage } from '../documento/documento';
import { AcompanhamentoHomePage } from '../acompanhamento-home/acompanhamento-home';

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
        type: "documento",
        id: 1,   
        resume: 'O processo 234567 necessita de um novo documento urgente',
        date: '23/12/2019',
      },
      {     
        type: "processo",
        id: 1, 
        resume: 'Acompanhe o processo de número 234567',
        date: '23/12/2019',
      },
      { 
        type: "documento",
        id: 2,     
        resume: 'O processo 456434 necessita de um novo documento urgente',
        date: '23/12/2019',
      },
      { 
        type: "processo",
        id: 3,     
        resume: 'Acompanhe o processo de número 058473',
        date: '23/12/2019',
      },
      { 
        type: "processo",
        id: 4,      
        resume: 'Acompanhe o processo de número 004372',
        date: '23/12/2019',
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificacaoPage');
  }

  public goTo(type: string, id: number){

    switch(type){
      case 'documento':
        this.navCtrl.push(DocumentoPage, {id: id});
        break;
      case 'processo':
        this.navCtrl.push(AcompanhamentoHomePage, {id: id});
        break;
      default:
        alert("Essa operação não existe, entre em contato!");
        break;
    }
    
  }

}
