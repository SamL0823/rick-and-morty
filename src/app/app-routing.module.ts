import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DirectoryComponent } from './directory/directory.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
import { componentFactoryName } from '@angular/compiler';
import { CharacterViewComponent } from './character-view/character-view.component';

const routes: Routes = [
    {
        path: 'search',
        component: SearchFormComponent
    },
    {
        path: '',
        component: HomePageComponent,
    },
    {
        path: 'directory',
        component: DirectoryComponent
    },
    {
        path: 'favorites',
        component: FavoritesListComponent
    },
    {
        path: 'character-view',
        component: CharacterViewComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }