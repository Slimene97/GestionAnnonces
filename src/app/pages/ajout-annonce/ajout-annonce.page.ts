import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Importations des modèles et services
import { Annonce } from '../../models/annonce';
import { AnnonceService } from '../../services/annonce.service';
import { Category } from 'src/app/models/category';

// Déclaration du composant Angular
@Component({
  selector: 'app-ajout-annonce',
  templateUrl: './ajout-annonce.page.html',
  styleUrls: ['./ajout-annonce.page.scss'],
})
export class AjoutAnnoncePage implements OnInit {
  // Tableau des catégories
  categories: Category[] = [];

  // Identifiant de l'annonce en cours d'édition
  annonceId: string | undefined;

  // Objet représentant la nouvelle annonce
  nouvelleAnnonce: Annonce = {
    id: '',
    title: '',
    description: '',
    categoryId: '',
    userId: '',
  };

  // Constructeur du composant
  constructor(
    private annonceService: AnnonceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // Méthode appelée à l'initialisation du composant
  ngOnInit() {
    // Chargement des catégories depuis le service
    this.annonceService.getCategories().subscribe(
      // En cas de succès
      (categories) => {
        this.categories = categories;
      },
      // En cas d'erreur
      (error) => {
        console.error('Erreur lors du chargement des catégories', error);
      }
    );

    // Abonnement aux changements dans les paramètres de l'URL
    this.route.params.subscribe((params) => {
      // Récupération de l'identifiant de l'annonce depuis les paramètres
      this.annonceId = params['id'];

      // Si un identifiant est présent, chargement de l'annonce correspondante
      if (this.annonceId) {
        this.annonceService.getAnnonceById(this.annonceId).subscribe(
          // En cas de succès
          (annonce) => {
            if (annonce) {
              this.nouvelleAnnonce = annonce;
            } else {
              console.error('Annonce non trouvée');
            }
          },
          // En cas d'erreur
          (error) => {
            console.error('Erreur lors du chargement de l\'annonce', error);
          }
        );
      }
    });
  }

  // Méthode appelée lors de la soumission du formulaire
  submitForm() {
    console.log('Formulaire soumis avec succès !');

    // Si un identifiant est présent, mise à jour de l'annonce
    if (this.annonceId) {
      this.annonceService.updateAnnonce(this.nouvelleAnnonce).subscribe(
        // En cas de succès
        (annonce) => {
          if (annonce) {
            console.log('Annonce mise à jour avec succès', annonce);
            this.router.navigate(['/annonces']);
          } else {
            console.error('Annonce non trouvée');
          }
        },
        // En cas d'erreur
        (error) => {
          console.error('Erreur lors de la mise à jour de l\'annonce', error);
        }
      );
    } else {
      // Sinon, ajout de la nouvelle annonce
      this.annonceService.createAnnonce(this.nouvelleAnnonce).subscribe(
        // En cas de succès
        (annonce) => {
          console.log('Annonce ajoutée avec succès', annonce);
          this.router.navigate(['/annonces']);
        },
        // En cas d'erreur
        (error) => {
          console.error('Erreur lors de l\'ajout de l\'annonce', error);
        }
      );
    }
  }
}
