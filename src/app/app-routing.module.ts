import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FeaturedpageComponent} from "./pages/featuredpage/featuredpage.component";
import {SearchpageComponent} from "./pages/searchpage/searchpage.component";

const routes: Routes = [
  {path: '', component: SearchpageComponent},
  {path:'featuredPage/:imdbID', component: FeaturedpageComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
