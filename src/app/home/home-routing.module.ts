import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page'; // Importation du composant de la page d'accueil

// Définition des itinéraires (routes) de la page d'accueil
const routes: Routes = [
  {
    path: '', // Chemin de l'itinéraire (route) pour la page d'accueil
    component: HomePage, // Composant à associer à cette route (page d'accueil dans ce cas)
  }
];

// Définition du module de routage pour la page d'accueil
@NgModule({
  imports: [RouterModule.forChild(routes)], // Importation du module de routage avec les itinéraires définis
  exports: [RouterModule] // Exportation du module de routage pour être utilisé par d'autres modules
})
export class HomePageRoutingModule {} // Exportation du module de routage de la page d'accueil
