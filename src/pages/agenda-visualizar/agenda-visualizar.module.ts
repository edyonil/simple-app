import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgendaVisualizarPage } from './agenda-visualizar';

@NgModule({
  declarations: [
    AgendaVisualizarPage,
  ],
  imports: [
    IonicPageModule.forChild(AgendaVisualizarPage),
  ],
})
export class AgendaVisualizarPageModule {}
