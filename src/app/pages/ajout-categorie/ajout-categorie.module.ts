import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutCategoriePageRoutingModule } from './ajout-categorie-routing.module';

import { AjoutCategoriePage } from './ajout-categorie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutCategoriePageRoutingModule
  ],
  declarations: [AjoutCategoriePage]
})
export class AjoutCategoriePageModule {}
