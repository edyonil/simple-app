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
    this.inicializaForm(null, null, null, null, null, null, null, null);
  }

  ionViewDidLoad() {
    this.getUser(this.navParams.data.slug);
    console.log('ionViewDidLoad PerfilPage');
  }

  private inicializaForm(nome, cpf, dataNascimento, pis, estadoCivil, profissao, aposentado, aposentadoAno)
  {
    let cpfRegex = "([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})";
    // let pisRegex = "";

    this.perfilForm = this.formBuilder.group({
      nome: [nome, [Validators.required]],
      cpf: [cpf, Validators.compose([Validators.required, Validators.pattern(cpfRegex)])],
      dataNascimento: [dataNascimento, [Validators.required]],
      pis: [pis, [Validators.required]],
      estadoCivil: [estadoCivil, [Validators.required]],
      profissao: [profissao, [Validators.required]],
      aposentado: [aposentado, [Validators.required]],
      aposentadoAno: [aposentadoAno]
    });
  }

  public getUser(slug){
    let perfis = [
      {
        name: "Ana",
        cpf: "02222222290",
        dateBirth: "1987-03-12",
        pis: "00947361523",
        civil: "Solteira",
        profissao: "Advogada",
        aposentado: false,
        aposentadoAno: "",
        slug: "ana"
      },
      {
        name: "Bruno Santana",
        cpf: "222222290",
        dateBirth: "1980-01-01",
        pis: "45678901",
        civil: "Casado",
        profissao: "Advogado",
        aposentado: true,
        aposentadoAno: "2012",
        slug: "bruno-santana"
      },
      {
        name: "Fernanda Pires",
        cpf: "02222222290",
        dateBirth: "1980-02-01",
        pis: "01234567891",
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

    this.inicializaForm(
      this.perfil.name, 
      this.perfil.cpf, 
      this.perfil.dateBirth,
      this.perfil.pis, 
      this.perfil.civil,
      this.perfil.profissao,
      this.perfil.aposentado,
      this.perfil.aposentadoAno
    );
  }

  public onSubmit(){
    let perfilForm = this.perfilForm.value;
    console.log(perfilForm);
  }

}
