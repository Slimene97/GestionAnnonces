import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importation de la page associée à ce module de routage
import { AjoutAnnoncePage } from './ajout-annonce.page';

// Définition des itinéraires pour cette page
const routes: Routes = [
  {
    path: '', // Chemin de l'itinéraire (racine pour cette page)
    component: AjoutAnnoncePage // Composant associé à cet itinéraire
  }
];

// Définition du module de routage pour la page d'ajout d'annonce
@NgModule({
  imports: [RouterModule.forChild(routes)], // Importation des itinéraires définis
  exports: [RouterModule],
})
export class AjoutAnnoncePageRoutingModule {} // Exportation du module de routage
