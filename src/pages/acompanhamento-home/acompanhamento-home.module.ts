import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcompanhamentoHomePage } from './acompanhamento-home';

@NgModule({
  declarations: [
    AcompanhamentoHomePage,
  ],
  imports: [
    IonicPageModule.forChild(AcompanhamentoHomePage),
  ],
})
export class AcompanhamentoHomePageModule {}
