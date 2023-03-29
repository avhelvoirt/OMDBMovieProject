import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Movie} from "../../model/movie";
import{GetService} from '../../service/get.service'

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  myForm: FormGroup | any;
  movieList: Movie[] = [];
  getService:GetService;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.getService = new GetService(http)
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      search: ['', [
        Validators.required
      ]]
    })
  }

  get getSearchResult() {
    return this.myForm.get('search')
  }

  FetchOMDBMovieOnTitle(){
    if (this.getSearchResult.value) {
      this.movieList = [];
      this.getService.fetchMoviesOnTitleInclPlot(this.getSearchResult.value, this.movieList)
    }
  }
}
