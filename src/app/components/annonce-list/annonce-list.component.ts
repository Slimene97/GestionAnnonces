
import { Component, OnInit } from '@angular/core';
import { Annonce } from '../../models/annonce';
import { AnnonceService } from '../../services/annonce.service';
import { Router } from '@angular/router';  
import { CategoryService } from 'src/app/services/category.service';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';

// Déclaration du composant Angular
@Component({
  selector: 'app-annonce-list', // Sélecteur utilisé pour intégrer ce composant dans le template HTML
  templateUrl: './annonce-list.component.html', // Chemin vers le fichier de template HTML
  styleUrls: ['./annonce-list.component.scss'], // Chemin vers le fichier de styles CSS
})
export class AnnonceListComponent implements OnInit {
  annonces: Annonce[] = []; // Tableau pour stocker les annonces récupérées

  // Constructeur du composant, injecte les services nécessaires
  constructor(
    private annonceService: AnnonceService, // Service pour les annonces
    private categoryService: CategoryService, // Service pour les catégories
    private router: Router // Service pour la navigation entre les pages
  ) {}

  // Méthode appelée lors de l'initialisation du composant
  ngOnInit() {
    this.loadAnnonces(); // Charge les annonces lors de l'initialisation
  }

  // Méthode pour charger les annonces depuis le service
  loadAnnonces() {
    this.annonceService.getAnnonces().subscribe(
      // Abonnez-vous pour recevoir les annonces
      (annonces) => {
        this.annonces = annonces; // Stocke les annonces dans le tableau local
      },
      (error) => {
        console.error('Erreur lors du chargement des annonces', error); // Affiche une erreur en cas de problème
      }
    );
  }

  // Méthode pour naviguer vers la page d'ajout d'une nouvelle annonce
  createAnnonce() {
    this.router.navigate(['/ajout-annonce']);
  }

  // Méthode pour naviguer vers la page d'édition d'une annonce spécifique
  editAnnonce(annonceId: string) {
    this.router.navigate(['/ajout-annonce', { id: annonceId }]);
  }

  // Méthode pour obtenir le nom de la catégorie en utilisant le service de catégorie
  getCategoryName(categoryId: string): Observable<string> {
    return this.categoryService.getCategoryById(categoryId).pipe(
      map(category => category ? category.name : 'Unknown Category')
    );
  }

  // Méthode pour supprimer une annonce spécifique
  deleteAnnonce(annonceId: string) {
    this.annonceService.deleteAnnonce(annonceId).subscribe(
      // Abonnez-vous pour recevoir la confirmation de suppression
      () => {
        console.log('Annonce supprimée avec succès'); // Affiche un message de confirmation
        this.loadAnnonces(); // Recharge les annonces après la suppression
      },
      (error) => {
        console.error('Erreur lors de la suppression de l\'annonce', error); // Affiche une erreur en cas de problème
      }
    );
  }
}
