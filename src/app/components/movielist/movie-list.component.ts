import {Component, Input} from '@angular/core';
import {Movie} from "../../model/movie";

@Component({
  selector: 'app-movielist',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  //TODO: fill the movielist here isntead in searchbar...

  @Input() movieList: Movie[] = [];

  constructor() {}

}
