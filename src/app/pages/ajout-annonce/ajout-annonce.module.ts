import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Importation du module Ionic pour l'interface utilisateur
import { IonicModule } from '@ionic/angular';

// Importation du module de routage associé à la page d'ajout d'annonce
import { AjoutAnnoncePageRoutingModule } from './ajout-annonce-routing.module';

// Importation du composant de la page d'ajout d'annonce
import { AjoutAnnoncePage } from './ajout-annonce.page';

// Définition du module pour la page d'ajout d'annonce
@NgModule({
  imports: [
    CommonModule, // Module commun d'Angular
    FormsModule, // Module de formulaires d'Angular
    IonicModule, // Module Ionic pour l'interface utilisateur
    AjoutAnnoncePageRoutingModule // Module de routage associé à la page
  ],
  declarations: [AjoutAnnoncePage] // Composant déclaré dans ce module
})
export class AjoutAnnoncePageModule {} // Exportation du module
