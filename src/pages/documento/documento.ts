import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomePage } from '../home/home';

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
  public docForm: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder,
  ) {

    this.docForm = this.formBuilder.group({
      docFormType: [null, [Validators.required]],
      docFormFile: [null, [Validators.required]]
    });

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

  public onSubmit(){
    console.log(this.docForm.value);

    let alert = this.alertCtrl.create({
      title: 'Sucesso',
      message: 'A foto do documento foi enviada com sucesso',
      buttons: [
        {
          text: 'Fechar',
          role: 'cancel',
          handler: () => {
            this.navCtrl.setRoot(HomePage)
          }
        },
      ]
    });
    alert.present();
  }
}
