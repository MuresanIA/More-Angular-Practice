import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule)
  },
  {
    path: 'items',
    loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
  },
  {
    path: 'spells',
    loadChildren: () => import('./spells/spells.module').then(m => m.SpellsModule)
  },
  {
    path: 'quests',
    loadChildren: () => import('./quests/quests.module').then(m => m.QuestsModule)
  },
  {
    path: 'adventuresongs',
    loadChildren: () => import('./adventure-songs/adventure-songs.module').then(m => m.AdventureSongsModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: "**", component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
