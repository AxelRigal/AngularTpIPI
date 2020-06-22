import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Movie[];
  searchtext: string;
  constructor(private service: MovieService) { 
  }

  ngOnInit(): void {

  }
  search(){
    this.service.getFromTitle(this.searchtext)
    .subscribe((arrayM : Array<Movie>) => (this.movies = arrayM['Search']));
  }
}
