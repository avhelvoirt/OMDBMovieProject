import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Search} from "../model/search";
import {Movie} from "../model/movie";
import {environment} from "../../environment/environment";
import {Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetService implements OnDestroy {
  subscription!: Subscription

  constructor(private http: HttpClient) {
  }
  fetchMoviesOnTitleInclPlot(searchResult: string, movieList: Movie[]) {
    return this.subscription = this.http.get<Search>('http://www.omdbapi.com/?apiKey=' + environment.apiKey + '&s=' + searchResult).subscribe(data => {
        if (data.Search) {
          data.Search.map(imdbID => {
            this.subscription = this.http.get<Movie>('http://www.omdbapi.com/?apikey=' + environment.apiKey + '&i=' + imdbID.imdbID + '&plot=full').subscribe(data => {
              if (movieList.length <= 4) {
                movieList.push(
                  {
                    imdbID: data.imdbID,
                    Title: data.Title,
                    Year: data.Year,
                    Rated: data.Rated,
                    Genre: data.Genre,
                    Director: data.Director,
                    Actors: data.Actors,
                    Plot: data.Plot,
                    Awards: data.Awards,
                    Poster: data.Poster,
                    Type: data.Type,
                  }
                )
              }
            })
          })
        } else {
          alert('Movie title was not found')
        }
      },error => {
      alert(error.message)
      }
    )
  }


  FetchMovieOnId(imdbID: string) {
    return this.http.get<Movie>('http://www.omdbapi.com/?i=' + imdbID + '&apikey=' + environment.apiKey + '&plot=full');
  }

  FetchPredefinedMovieOnId() {
    return this.http.get<Movie>('http://www.omdbapi.com/?i=tt3682448&apikey=' + environment.apiKey + '&plot=full');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
