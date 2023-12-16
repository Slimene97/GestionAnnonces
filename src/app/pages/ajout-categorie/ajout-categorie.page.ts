// Importation de modules et de services Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

// Définition du composant Angular
@Component({
  selector: 'app-ajout-categorie',
  templateUrl: './ajout-categorie.page.html',
  styleUrls: ['./ajout-categorie.page.scss'],
})
export class AjoutCategoriePage implements OnInit {
  // Déclaration de variables
  categoryId: string | undefined;
  newCategory: Category = {
    id: '',
    name: '',
  };

  // Constructeur du composant
  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // Méthode appelée lors de l'initialisation du composant
  ngOnInit() {
    // Souscription aux changements des paramètres d'URL
    this.route.params.subscribe((params) => {
      // Récupération de l'ID de la catégorie depuis les paramètres d'URL
      this.categoryId = params['id'];

      // Vérification de l'existence de l'ID de catégorie
      if (this.categoryId) {
        // Logique pour récupérer et remplir les données de catégorie existantes
        // Vous devrez peut-être appeler un service pour récupérer la catégorie par ID
        // this.categoryService.getCategoryById(this.categoryId).subscribe(
        //   (category) => {
        //     this.newCategory = category;
        //   },
        //   (error) => {
        //     console.error('Erreur lors du chargement de la catégorie', error);
        //   }
        // );
      }
    });
  }

  // Méthode appelée lors de la soumission du formulaire
  submitForm() {
    console.log('Formulaire soumis avec succès !');

    // Vérification de l'existence de l'ID de catégorie
    if (this.categoryId) {
      // Logique pour mettre à jour la catégorie existante
      // this.categoryService.updateCategory(this.newCategory).subscribe(
      //   (category) => {
      //     console.log('Catégorie mise à jour avec succès', category);
      //     this.router.navigate(['/categories']);
      //   },
      //   (error) => {
      //     console.error('Erreur lors de la mise à jour de la catégorie', error);
      //   }
      // );
    } else {
      // Logique pour ajouter une nouvelle catégorie
      this.categoryService.addCategory(this.newCategory).subscribe(
        (category) => {
          console.log('Catégorie ajoutée avec succès', category);
          this.router.navigate(['/categories']);
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de la catégorie', error);
        }
      );
    }
  }
}
