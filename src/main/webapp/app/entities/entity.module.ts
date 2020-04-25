import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'club',
        loadChildren: () => import('./club/club.module').then(m => m.Plateau93ClubModule)
      },
      {
        path: 'stade',
        loadChildren: () => import('./stade/stade.module').then(m => m.Plateau93StadeModule)
      },
      {
        path: 'categorie',
        loadChildren: () => import('./categorie/categorie.module').then(m => m.Plateau93CategorieModule)
      },
      {
        path: 'referent',
        loadChildren: () => import('./referent/referent.module').then(m => m.Plateau93ReferentModule)
      },
      {
        path: 'plateau',
        loadChildren: () => import('./plateau/plateau.module').then(m => m.Plateau93PlateauModule)
      },
      {
        path: 'inscription',
        loadChildren: () => import('./inscription/inscription.module').then(m => m.Plateau93InscriptionModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class Plateau93EntityModule {}
