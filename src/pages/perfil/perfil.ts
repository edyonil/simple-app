import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  public perfil:any = {};
  public perfilForm: FormGroup;

  edit: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder
  ) {

    let cpfRegex = "([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})";
    // let pisRegex = "";

    this.perfilForm = this.formBuilder.group({
      nome: [null, [Validators.required]],
      idade: [null, [Validators.required]],
      cpf: [null, Validators.compose([Validators.required, Validators.pattern(cpfRegex)])],
      dataNascimento: [null, [Validators.required]],
      pis: [null, [Validators.required]],
      estadoCivil: [null, [Validators.required]],
      profissao: [null, [Validators.required]],
      aposentado: [null, [Validators.required]],
      aposentadoAno: [null]
    });
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

    this.perfilForm = this.formBuilder.group({
      nome: [this.perfil.name],
      idade: [this.perfil.age],
      cpf: [this.perfil.cpf],
      dataNascimento: [this.perfil.dateBirth],
      pis: [this.perfil.pis],
      estadoCivil: [this.perfil.civil],
      profissao: [this.perfil.profissao],
      aposentado: [this.perfil.aposentado],
      aposentadoAno: [this.perfil.aposentadoAno]
    });
  }

  public onSubmit(){
    let perfilForm = this.perfilForm.value;
    console.log(perfilForm);
  }


}
