import { NgModule } from '@angular/core';
import { CpfPipe } from './cpf/cpf';
import { PisPipe } from './pis/pis';
import { IdadePipe } from './idade/idade';
@NgModule({
	declarations: [CpfPipe,
    CpfPipe,
    PisPipe,
    IdadePipe],
	imports: [],
	exports: [CpfPipe,
    CpfPipe,
    PisPipe,
    IdadePipe]
})
export class PipesModule {}
