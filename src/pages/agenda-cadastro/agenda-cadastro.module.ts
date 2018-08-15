import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgendaCadastroPage } from './agenda-cadastro';

@NgModule({
  declarations: [
    AgendaCadastroPage,
  ],
  imports: [
    IonicPageModule.forChild(AgendaCadastroPage),
  ],
})
export class AgendaCadastroPageModule {}
