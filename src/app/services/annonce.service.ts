// Importation de la décoration Injectable depuis Angular
import { Injectable } from '@angular/core';

// Importation des observables et de la fonction 'of' depuis RxJS
import { Observable, of } from 'rxjs';

// Importation des modèles Annonce et Category
import { Annonce } from '../models/annonce';
import { Category } from '../models/category';

// Importation du service CategoryService
import { CategoryService } from './category.service';

// Décoration du service pour l'injection de dépendance
@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  // Déclaration d'une liste d'annonces (simulée ici pour la démonstration)
  private annonces: Annonce[] = [];

  // Constructeur du service avec injection du service CategoryService
  constructor(private categoryService: CategoryService) {
    // Vous pouvez initialiser des annonces fictives ici à des fins de démonstration
    this.annonces = [
      { id: '1', title: 'Annonce 1', description: 'Description de l\'annonce 1', categoryId: '1', userId: '1' },
      { id: '2', title: 'Annonce 2', description: 'Description de l\'annonce 2', categoryId: '2', userId: '2' },
    ];
  }

  // Méthode pour obtenir la liste des annonces
  getAnnonces(): Observable<Annonce[]> {
    return of(this.annonces);
  }

  // Méthode pour obtenir une annonce par ID
  getAnnonceById(id: string): Observable<Annonce | undefined> {
    return of(this.annonces.find(annonce => annonce.id === id));
  }

  // Méthode pour créer une nouvelle annonce
createAnnonce(annonce: Annonce): Observable<Annonce> {
  // Attribution d'un nouvel ID à l'annonce
  annonce.id = (this.annonces.length + 1).toString(); 

  // Ajout de la nouvelle annonce à la liste des annonces
  this.annonces.push(annonce);

  // Retour de l'annonce créée via un observable
  return of(annonce);
}

  // Méthode pour obtenir la liste des catégories
  getCategories(): Observable<Category[]> {
    // Appelez la méthode du service CategoryService pour obtenir la liste des catégories
    return this.categoryService.getCategories();
  }

 // Méthode pour mettre à jour une annonce existante
updateAnnonce(annonce: Annonce): Observable<Annonce | undefined> {
  // Recherche de l'indice de l'annonce dans la liste
  const index = this.annonces.findIndex(a => a.id === annonce.id);

  // Vérification si l'annonce existe dans la liste
  if (index !== -1) {
    // Mise à jour de l'annonce à l'indice trouvé
    this.annonces[index] = annonce;

    // Retour de l'annonce mise à jour via un observable
    return of(annonce);
  }

  // Retour d'undefined si l'annonce n'est pas trouvée dans la liste
  return of(undefined);
}


  // Méthode pour supprimer une annonce
deleteAnnonce(id: string): Observable<void> {
  // Recherche de l'indice de l'annonce dans la liste
  const index = this.annonces.findIndex(annonce => annonce.id === id);

  // Vérification si l'annonce existe dans la liste
  if (index !== -1) {
    // Suppression de l'annonce à l'indice trouvé
    this.annonces.splice(index, 1);
  }

  // Retour d'un observable vide
  return of();
}

}
