import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {BlogPage} from "../pages/blog/blog";
import {PostPage} from "../pages/post/post";
import {LoginPage} from '../pages/login/login';
import {InternoPage} from '../pages/interno/interno';
import {JusticaPage} from '../pages/justica/justica';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ListPage,
        BlogPage,
        PostPage,
        LoginPage,
        InternoPage,
        JusticaPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp, {
            mode: 'md'
        }),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ListPage,
        BlogPage,
        PostPage,
        LoginPage,
        InternoPage,
        JusticaPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
