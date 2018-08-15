import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { environment } from '../../environments/environment';
import { CalendarComponentOptions } from 'ion2-calendar';

import moment from 'moment';
import 'moment/locale/pt';

/**
 * Generated class for the AgendaCadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agenda-cadastro',
  templateUrl: 'agenda-cadastro.html',
})
export class AgendaCadastroPage {

  public form: FormGroup;

  public date: string;

  public motivo = [
    {
      name: "Uma nova causa",
      value: "1"
    },
    {
      name: "Causa Existente",
      value: "2"
    }
  ]

  public tipoNovaCausa = [
    {
      name: "FGTS",
      value: "1"
    },
    {
      name: "INSS",
      value: "2"
    },
    {
      name: "PIS",
      value: "2"
    }
  ]

  public optionCalendar: CalendarComponentOptions = {
    showMonthPicker: true,
    monthFormat: 'MMMM YYYY',
    monthPickerFormat: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'],
    weekdays: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
  }

  public horario = environment.horarioAtendimento;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    moment.locale('pt-BR');
    this.form = this.formBuilder.group({
      novo: [null],
      tipo: [null],
      data: [null],
      horario: [null],
      observacao: [null]
    });
  }

  ionViewDidLoad() {

  }

  onChange(evento) {
    console.log(evento);
  }

}
