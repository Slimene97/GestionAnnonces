
import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category'; // Importation du modèle de catégorie
import { CategoryService } from '../../services/category.service'; // Importation du service de catégorie
import { Router } from '@angular/router'; // Importation du module de routage pour la navigation entre les pages

// Définition du composant avec ses métadonnées
@Component({
  selector: 'app-category-list', // Sélecteur du composant
  templateUrl: './category-list.component.html', // Chemin vers le fichier HTML du composant
  styleUrls: ['./category-list.component.scss'], // Chemin vers le fichier de styles du composant
})

// Définition de la classe du composant qui implémente l'interface OnInit
export class CategoryListComponent implements OnInit {
  // Déclaration d'une variable pour stocker la liste des catégories
  categories: Category[] = [];

  // Constructeur du composant, injection des dépendances (services et modules)
  constructor(private categoryService: CategoryService, private router: Router) {}

  // Méthode appelée lors de l'initialisation du composant
  ngOnInit() {
    // Appel de la méthode pour charger les catégories depuis le service
    this.loadCategories();
  }

  // Méthode pour charger les catégories depuis le service
  loadCategories() {
    // Appel du service pour obtenir la liste des catégories
    this.categoryService.getCategories().subscribe(
      // Succès : les catégories sont stockées dans la variable du composant
      (categories) => {
        this.categories = categories;
      },
      // Erreur : affichage d'un message dans la console
      (error) => {
        console.error('Error loading categories', error);
      }
    );
  }

  // Méthode pour rediriger vers la page d'ajout de catégorie
  createCategory() {
    // Rediriger vers la page d'ajout de catégorie (ajustez le chemin selon votre structure)
    this.router.navigate(['/ajout-categorie']);
  }
}
