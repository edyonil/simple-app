import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  public perfil = {};

  edit: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getUser(this.navParams.data.slug);
    console.log('ionViewDidLoad PerfilPage');
  }

  public getUser(slug){
    let perfis = [
      {
        name: "Ana",
        age: "31 anos",
        cpf: "02222222290",
        dateBirth: "12/03/1987",
        pis: "8473284023047238",
        civil: "Solteira",
        profissao: "Advogada",
        aposentado: false,
        aposentadoAno: "",
        slug: "ana"
      },
      {
        name: "Bruno Santana",
        age: "25 anos",
        cpf: "02222222290",
        dateBirth: "01/01/1980",
        pis: "8473284023047238",
        civil: "Casado",
        profissao: "Advogado",
        aposentado: true,
        aposentadoAno: "2012",
        slug: "bruno-santana"
      },
      {
        name: "Fernanda Pires",
        age: "25 anos",
        cpf: "02222222290",
        dateBirth: "01/01/1980",
        pis: "8473284023047238",
        civil: "Casado",
        profissao: "Advogado",
        aposentado: true,
        aposentadoAno: "2012",
        slug: "fernanda-pires"
      },
    ];

    perfis.map( perfil => {
      if(perfil.slug == slug){
        this.perfil = perfil;
      }
    });
  }

  public editar(slug){
    console.log(slug);
    this.edit = true;

    this.getUser(slug);
    // this.navCtrl.push(PerfilEditPage);
  }


}
