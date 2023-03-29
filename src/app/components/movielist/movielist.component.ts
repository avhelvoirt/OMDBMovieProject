import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss']
})
export class MovielistComponent {

  @Input() Poster: string = '';
  @Input() Title: string = '';
  @Input() Type: string = '';
  @Input() Year: string = '';
  @Input() Rated: string = '';
  @Input() Genre: string = '';
  @Input() Director: string = '';
  @Input() Actors: string ='';
  @Input() Plot:string ='';
  @Input() Awards:string ='';

  constructor() {
  }



}
