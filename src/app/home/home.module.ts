import { NgModule } from '@angular/core';

// Importation du module CommonModule pour utiliser des fonctionnalités communes d'Angular
import { CommonModule } from '@angular/common';

// Importation du module IonicModule pour intégrer Ionic dans le module
import { IonicModule } from '@ionic/angular';

// Importation du module FormsModule pour gérer les formulaires dans le module
import { FormsModule } from '@angular/forms';

// Importation du composant HomePage
import { HomePage } from './home.page';

// Importation du module de routage de la page d'accueil
import { HomePageRoutingModule } from './home-routing.module';

// Importation des composants personnalisés (AnnonceListComponent, CategoryListComponent)
import { AnnonceListComponent } from '../components/annonce-list/annonce-list.component';
import { CategoryListComponent } from '../components/category-list/category-list.component';

// Définition du module de la page d'accueil
@NgModule({
  // Importation des modules requis
  imports: [
    CommonModule, // Module commun
    FormsModule, // Module de formulaires
    IonicModule, // Module Ionic
    HomePageRoutingModule // Module de routage de la page d'accueil
  ],
  
  // Déclaration des composants de la page d'accueil et des composants personnalisés
  declarations: [HomePage, AnnonceListComponent, CategoryListComponent]
})
export class HomePageModule {} // Exportation du module de la page d'accueil
