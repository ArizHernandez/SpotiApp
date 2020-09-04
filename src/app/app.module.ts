import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component'
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { SearchComponent } from './components/search/search.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component'

//pipes
import { NoimagesPipe } from './pipes/noimages.pipe'
import { DomSeguro } from './pipes/domseguro.pipe';

//Importar rutas
import { ROUTES } from './app.routes';

//Servicios
import { SpotifyService } from './services/spotify.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ArtistaComponent,
    SearchComponent,
    TarjetasComponent,
    DomSeguro,
    LoadingComponent,
    NoimagesPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES,{useHash:true})
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
