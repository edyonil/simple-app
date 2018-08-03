import {Component} from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import {PostPage} from "../post/post";

/**
 * Generated class for the BlogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
    selector: 'page-blog',
    templateUrl: 'blog.html',
})
export class BlogPage {

    public items = [
        {
            id: "1234",
            date: '12 de junho de 2018',
            title: 'Bem vindos ao novo blog do SIMPLE App',
            resume: 'As promoções não são cumulativas. Compras feitas com cartões de crédito podem ser parceladas em até 10x sem juros, respeitando-se o valor da parcela mínima que estará disponível.'
        },
        {
            id: "1234",
            date: '12 de junho de 2018',
            title: 'Bem vindos ao novo blog do SIMPLE App',
            resume: 'As promoções não são cumulativas. Compras feitas com cartões de crédito podem ser parceladas em até 10x sem juros, respeitando-se o valor da parcela mínima que estará disponível.'
        },
        {
            id: "1234",
            date: '12 de junho de 2018',
            title: 'Bem vindos ao novo blog do SIMPLE App',
            resume: 'As promoções não são cumulativas. Compras feitas com cartões de crédito podem ser parceladas em até 10x sem juros, respeitando-se o valor da parcela mínima que estará disponível.'
        },
        {
            id: "1234",
            date: '12 de junho de 2018',
            title: 'Bem vindos ao novo blog do SIMPLE App',
            resume: 'As promoções não são cumulativas. Compras feitas com cartões de crédito podem ser parceladas em até 10x sem juros, respeitando-se o valor da parcela mínima que estará disponível.'
        },
        {
            id: "1234",
            date: '12 de junho de 2018',
            title: 'Bem vindos ao novo blog do SIMPLE App',
            resume: 'As promoções não são cumulativas. Compras feitas com cartões de crédito podem ser parceladas em até 10x sem juros, respeitando-se o valor da parcela mínima que estará disponível.'
        },
        {
            id: "1234",
            date: '12 de junho de 2018',
            title: 'Bem vindos ao novo blog do SIMPLE App',
            resume: 'As promoções não são cumulativas. Compras feitas com cartões de crédito podem ser parceladas em até 10x sem juros, respeitando-se o valor da parcela mínima que estará disponível.'
        }
    ]

    constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad BlogPage');
    }

    public goTo(id) {

        let profileModal = this.modalCtrl.create(PostPage, {
            id: id
        });

        profileModal.present();
    }

}
