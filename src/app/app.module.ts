import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { Telainicial } from './telainicial/telainicial.component';
import { TelaboasvindasComponent } from './telaboasvindas/telaboasvindas.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    Telainicial,
    TelaboasvindasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
