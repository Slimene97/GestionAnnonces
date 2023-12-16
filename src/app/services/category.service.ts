// src/app/services/category.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categories: Category[] = [
    { id: '1', name: 'Category 1' },
    { id: '2', name: 'Category 2' },
    // ... add more categories as needed
  ];

  constructor() {}

  getCategories(): Observable<Category[]> {
    return of(this.categories);
  }
  addCategory(category: Category): Observable<Category> {
    // Générez un identifiant unique (ici, nous utilisons simplement la longueur du tableau + 1)
    category.id = (this.categories.length + 1).toString();
    
    // Ajoutez la nouvelle catégorie à la liste
    this.categories.push(category);

    // Retournez la catégorie ajoutée
    return of(category);
  }
 // Méthode pour obtenir une catégorie par ID
getCategoryById(categoryId: string): Observable<Category | null> {
  // Recherche de la catégorie dans la liste des catégories
  const category = this.categories.find(c => c.id === categoryId);

  // Retour de la catégorie si trouvée, sinon retourne null
  return of(category || null);
}

  // Ajoutez d'autres méthodes si nécessaire (modification, suppression, etc.)
}

