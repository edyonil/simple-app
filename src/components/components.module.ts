import { NgModule } from '@angular/core';
import { AlertaComponent } from './alerta/alerta';
import { CommonModule } from '@angular/common';
@NgModule({
	declarations: [AlertaComponent],
	imports: [
    CommonModule
  ],
	exports: [AlertaComponent]
})
export class ComponentsModule {}
