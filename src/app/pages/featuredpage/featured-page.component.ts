import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Movie} from "../../model/movie";
import {GetService} from "../../service/get.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-featuredpage',
  templateUrl: './featured-page.component.html',
  styleUrls: ['./featured-page.component.scss']
})

export class FeaturedPageComponent implements OnInit {
  $selectedMovie!: Observable<Movie>;
  $predefinedMovie!: Observable<Movie>

  constructor(private activatedRoute: ActivatedRoute, private getService: GetService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.$selectedMovie = this.getService.fetchMovieOnId(params['imdbID']);
    });
    this.$predefinedMovie = this.getService.fetchMovieOnId('tt3682448');
  }
}
