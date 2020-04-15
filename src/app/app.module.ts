import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RmapiService } from 'src/app/rmapi.service';

import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DirectoryComponent } from './directory/directory.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchFormComponent,
    NavBarComponent,
    DirectoryComponent,
    FavoritesListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    RmapiService,
    DirectoryComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
