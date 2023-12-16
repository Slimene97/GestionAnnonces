// Importations des modules Angular nécessaires
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importation de la page associée
import { AjoutCategoriePage } from './ajout-categorie.page';

// Définition des routes
const routes: Routes = [
  {
    path: '',
    component: AjoutCategoriePage
  }
];

// Déclaration du module de routage
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutCategoriePageRoutingModule {}
