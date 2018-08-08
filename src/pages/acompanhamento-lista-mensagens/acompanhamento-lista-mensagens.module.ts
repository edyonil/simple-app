import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcompanhamentoListaMensagensPage } from './acompanhamento-lista-mensagens';

@NgModule({
  declarations: [
    AcompanhamentoListaMensagensPage,
  ],
  imports: [
    IonicPageModule.forChild(AcompanhamentoListaMensagensPage),
  ],
})
export class AcompanhamentoListaMensagensPageModule {}
