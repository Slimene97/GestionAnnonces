// Configuration des routes pour la navigation dans l'application
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AnnonceListComponent } from './components/annonce-list/annonce-list.component';
import { AjoutAnnoncePage } from './pages/ajout-annonce/ajout-annonce.page';
import { CategoryListComponent } from './components/category-list/category-list.component';

const routes: Routes = [
  // Chargement du module 'home' de manière asynchrone
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  // Redirection par défaut vers la page 'home'
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // Route pour afficher la liste des annonces
  {
    path: 'annonces',
    component: AnnonceListComponent,
  },
  // Chargement du module 'ajout-annonce' de manière asynchrone
  {
    path: 'ajout-annonce',
    loadChildren: () => import('./pages/ajout-annonce/ajout-annonce.module').then(m => m.AjoutAnnoncePageModule)
  },
  // Route pour l'édition d'une annonce spécifique
  {
    path: 'ajout-annonce/:id',
    component: AjoutAnnoncePage, // Utilisez directement le composant pour l'édition
  },
  // Route pour afficher la liste des catégories
  {
    path: 'categories',
    component: CategoryListComponent,
  },
  // Chargement du module 'ajout-categorie' de manière asynchrone
  {
    path: 'ajout-categorie',
    loadChildren: () => import('./pages/ajout-categorie/ajout-categorie.module').then(m => m.AjoutCategoriePageModule)
  },
];

@NgModule({
  imports: [
    // Configuration du routeur avec les routes définies et la stratégie de préchargement
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
