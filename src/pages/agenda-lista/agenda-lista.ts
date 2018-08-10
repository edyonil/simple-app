import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AgendaListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agenda-lista',
  templateUrl: 'agenda-lista.html',
})
export class AgendaListaPage {

  public items: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.items = [
      {
        id: '123',
        data: {
          dia: 12,
          mes: 'Janeiro',
          ano: 2018
        },
        horario: '08:30',
        descricao: 'Reunião com advogada Lenia',
        status: {
          descricao: 'Confirmada',
          slug: 'confirmada'
        }
      },
      {
        id: '123',
        data: {
          dia: 14,
          mes: 'Janeiro',
          ano: 2018
        },
        horario: '08:30',
        descricao: 'Reunião com advogada Lenia',
        status: {
          descricao: 'Cancelada',
          slug: 'cancelada'
        }
      },
      {
        id: '123',
        data: {
          dia: 16,
          mes: 'Janeiro',
          ano: 2018
        },
        horario: '08:30',
        descricao: 'Reunião com advogada Lenia',
        status: {
          descricao: 'Aguardando',
          slug: 'aguardando'
        }
      },
      {
        id: '123',
        data: {
          dia: 17,
          mes: 'Janeiro',
          ano: 2018
        },
        horario: '08:30',
        descricao: 'Reunião com advogada Lenia',
        status: {
          descricao: 'Confirmada',
          slug: 'confirmada'
        }
      },
      {
        id: '123',
        data: {
          dia: 19,
          mes: 'Janeiro',
          ano: 2018
        },
        horario: '08:30',
        descricao: 'Reunião com advogada Lenia',
        status: {
          descricao: 'Cancelada',
          slug: 'cancelada'
        }
      },
      {
        id: '123',
        data: {
          dia: 25,
          mes: 'Janeiro',
          ano: 2018
        },
        horario: '08:30',
        descricao: 'Reunião com advogada Lenia',
        status: {
          descricao: 'Aguardando',
          slug: 'aguardando'
        }
      }
    ]
  }

}
