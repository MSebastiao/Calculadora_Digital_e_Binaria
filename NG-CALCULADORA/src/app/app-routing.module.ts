import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcBinariaComponent } from './calc-binaria/calc-binaria.component';
import { CalcDigitalComponent } from './calc-digital/calc-digital.component';
import { GrupoComponent } from './grupo/grupo.component';

const routes: Routes = [
  {path: 'grupo', component: GrupoComponent },
  {path: 'binario', component: CalcBinariaComponent},
  {path: 'digital', component: CalcDigitalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
