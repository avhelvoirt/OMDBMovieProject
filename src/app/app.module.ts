import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {SearchbarComponent} from './components/searchbar/searchbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import { MovieListComponent } from './components/movielist/movie-list.component';
import { SearchPageComponent } from './pages/searchpage/search-page.component';
import { FeaturedPageComponent } from './pages/featuredpage/featured-page.component';
import {GetService} from "./service/get.service";

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    MovieListComponent,
    SearchPageComponent,
    FeaturedPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [GetService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
