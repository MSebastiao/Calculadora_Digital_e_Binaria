import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CalcBinariaComponent } from './calc-binaria/calc-binaria.component';
import { GrupoComponent } from './grupo/grupo.component';
import { CalcDigitalComponent } from './calc-digital/calc-digital.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { CalHexComponent } from './cal-hex/cal-hex.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcBinariaComponent,
    GrupoComponent,
    CalcDigitalComponent,
    MenuComponent,
    CalHexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
