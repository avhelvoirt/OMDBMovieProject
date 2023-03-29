import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FeaturedPageComponent} from "./pages/featuredpage/featured-page.component";
import {SearchPageComponent} from "./pages/searchpage/search-page.component";

const routes: Routes = [
  {path: '', component: SearchPageComponent},
  {path:'featuredPage/:imdbID', component: FeaturedPageComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
