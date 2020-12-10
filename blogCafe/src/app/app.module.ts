import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { HeaderComponent } from './Componentes/_Layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
