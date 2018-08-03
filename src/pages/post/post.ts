import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-post',
    templateUrl: 'post.html',
})
export class PostPage {

    public item = null

    constructor(public navCtrl: NavController, public navParams: NavParams) {

        this.item = {
            title: 'Bem vindos ao novo blog do SIMPLE App',
            resume: 'As promoções não são cumulativas. Compras feitas com cartões de crédito podem ser parceladas em até 10x sem juros, respeitando-se o valor da parcela mínima que estará disponível.',
            date: '12 de junho de 2018',
            image: 'https://image.freepik.com/fotos-gratis/conceito-financas-economia-economica-contabilista-feminino-ou-calculadora-de-uso-de-banqueiro_1421-90.jpg',
            body: 'O Choco la Design está no ar há 8 anos e de lá pra cá a minha proposta com o projeto foi sendo ajustada conforme eu progredia na minha carreira. Mas é claro, não cheguei até aqui sozinho. Entre a quantidade enorme de pessoas que fazem parte dessa história, eu não posso deixar de mencionar o Willian Matiola que começou o Choco la Design comigo lá em 2010 e fez uma gestão de conteúdo maravilhosa até 2014! 💙\n</br></br' +
            '\n' +
            'Em 2017 tentei uma migrar para o Medium, mas apesar do Medium ser uma ótima plataforma para compartilhar conteúdo, eu senti falta do Choco ter uma “casa” onde eu pudesse explorar tudo que eu pudesse sem ficar preso em uma plataforma ou formato muito restrito.'
        }
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PostPage');
    }

}
