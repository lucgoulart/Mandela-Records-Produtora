import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MidiasComponent } from './midias/midias.component';
import { SafePipe } from './shared/safe.pipe';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { ArtistasComponent } from './artistas/artistas/artistas.component';
import { ContatoComponent } from './contato/contato/contato.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MidiasComponent,
    SafePipe,
    QuemSomosComponent,
    ComoFuncionaComponent,
    ArtistasComponent,
    ContatoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
