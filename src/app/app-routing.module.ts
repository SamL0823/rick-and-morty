import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { DirectoryComponent } from './directory/directory.component';
import { SearchFormComponent } from './search-page/search-form/search-form.component';
import { from } from 'rxjs';

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
        component: FavoritesPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }