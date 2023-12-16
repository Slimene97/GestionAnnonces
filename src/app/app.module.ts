// Configuration du module principal de l'application
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  // Configuration des modules importés
  imports: [BrowserModule, IonicModule.forRoot(), FormsModule, IonicModule, AppRoutingModule],
  // Configuration des fournisseurs de services
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  // Composant racine de l'application
  bootstrap: [AppComponent],
})
export class AppModule {}
