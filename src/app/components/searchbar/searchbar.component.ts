import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Movie} from "../../model/movie";
import {GetService} from '../../service/get.service'

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  myForm!: FormGroup;
  movieList: Movie[] = [];

  constructor(private fb: FormBuilder, private getService: GetService) {
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      search: ['', [
        Validators.required
      ]]
    });
  }

  getSearchResult(): AbstractControl {
    return this.myForm.get('search')!;
  }

  fetchOMDBMovieOnTitle(): void {
    if (this.getSearchResult().value) {
      this.movieList = [];
      this.getService.fetchMoviesOnTitleInclPlot(this.getSearchResult().value, this.movieList);
    }
  }
}
