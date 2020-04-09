import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DirectoryPageComponent } from './directory-page/directory-page.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';

const routes: Routes = [
    {
        path: 'search',
        component: SearchPageComponent
    },
    {
        path: '',
        component: HomePageComponent,
    },
    {
        path: 'directory',
        component: DirectoryPageComponent
    },
    {
        path: 'favorites',
        component: FavoritesPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }