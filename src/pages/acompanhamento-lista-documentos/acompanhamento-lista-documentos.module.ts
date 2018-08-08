import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcompanhamentoListaDocumentosPage } from './acompanhamento-lista-documentos';

@NgModule({
  declarations: [
    AcompanhamentoListaDocumentosPage,
  ],
  imports: [
    IonicPageModule.forChild(AcompanhamentoListaDocumentosPage),
  ],
})
export class AcompanhamentoListaDocumentosPageModule {}
