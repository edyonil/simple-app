import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DocumentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-documento',
  templateUrl: 'documento.html',
})
export class DocumentoPage {

  public doctypes = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getDocuments();
    console.log('ionViewDidLoad DocumentoPage');
  }

  public getDocuments(){
    this.doctypes = [
      {
        name: "NES",
        value: "nes"
      },
      {
        name: "Nintendo64",
        value: "n64"
      },
      {
        name: "PlayStation",
        value: "ps"
      },
      {
        name: "Sega Genesis",
        value: "genesis"
      },
      {
        name: "Sega Saturn",
        value:"saturn"        
      },
      {
        name: "SNES",
        value:"snes"
      }
    ]
  }

  public onSelect(event){
    console.log(event);
  }
}
