import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Search} from "../model/search";
import {Movie} from "../model/movie";
import {environment} from "../../environment/environment";
import {Observable, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetService implements OnDestroy {
  private subscriptions: Subscription;
  private readonly apiBaseUrl = `https://www.omdbapi.com/?apiKey=${environment.apiKey}`;

  constructor(private http: HttpClient) {
    this.subscriptions = new Subscription();
  }

  //TODO: Change to Observable function.
  fetchMoviesOnTitleInclPlot(searchResult: string, movieList: Movie[]): void {
    this.subscriptions.add(this.http.get<Search>(`${this.apiBaseUrl}&s=${searchResult}`).subscribe(data => {
          if (data.Search) {
            data.Search.slice(0, 5).map(searchData => {
              this.subscriptions.add(this.fetchMovieOnId(searchData.imdbID).subscribe(data => {
                  movieList.push(data)
                })
              )
            })
          } else {
            alert('Movie title was not found')
          }
          //TODO: Extend error handeling.
        }, error => alert(error.message)
      )
    )
  }

  fetchMovieOnId(imdbID: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiBaseUrl}&i=${imdbID}&plot=full`);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
