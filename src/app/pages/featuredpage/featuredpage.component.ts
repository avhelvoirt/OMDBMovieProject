import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Movie} from "../../model/movie";
import {HttpClient} from "@angular/common/http";
import {GetService} from "../../service/get.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-featuredpage',
  templateUrl: './featuredpage.component.html',
  styleUrls: ['./featuredpage.component.scss']
})
export class FeaturedpageComponent implements OnInit {
  getService;
  $selectedMovie!: Observable<Movie>;
  $predefinedMovie!: Observable<Movie>
  constructor(private activatedRoute: ActivatedRoute, private http:HttpClient) {
    this.getService = new GetService(http);
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.$selectedMovie = this.getService.FetchMovieOnId(params['imdbID']);
    })
    this.$predefinedMovie = this.getService.FetchPredefinedMovieOnId();
  }
}
