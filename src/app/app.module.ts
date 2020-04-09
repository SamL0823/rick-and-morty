import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RmapiService } from 'src/app/rmapi.service';


import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { DirectoryPageComponent } from './directory-page/directory-page.component';
import { SearchFormComponent } from './search-page/search-form/search-form.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DirectoryComponent } from './directory-page/directory/directory.component';
import { DerpPipe } from './derp.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchPageComponent,
    DirectoryPageComponent,
    SearchFormComponent,
    FavoritesPageComponent,
    NavBarComponent,
    DirectoryComponent,
    DerpPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [RmapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
