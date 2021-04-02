import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/class/movie';
import { MoviesService } from 'src/app/services/movies.service';
//import * from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageEvent: any;
  popularmovies: Movie[]=[];
  nowplayingmovies: Movie[]=[];
  topratedmovies: Movie[]=[];
  upcomingmovies: Movie[]=[];
  banerimage = '';
  slides: any[]=[];
  slideConfig = {'slidesToShow': 1, 'slidesToScroll': 1, 'infinite' : true, autoplay: true, autoplaySpeed: 7000,fade: true,};
  slideConfig1 = {'slidesToShow': 5, 'slidesToScroll': 3, 'infinite' : false};

  constructor(private movieSvc: MoviesService) {

  }

  ngOnInit(): void {

    this.movieSvc.getPopularMovies(1).subscribe((response)=>{
      this.popularmovies= response.results;
    });
    this.movieSvc.getUpcoming(1).subscribe((response)=>{
      this.upcomingmovies= response.results;
    });
    this.movieSvc.getTopRated(1).subscribe((response)=>{
      this.topratedmovies= response.results;
    });
    this.movieSvc.getNowPlaying(1).subscribe((response)=>{
      this.nowplayingmovies= response.results;
    });





  }

  CambiarImagen(){
    this.banerimage= this.popularmovies[5].backdrop_path;
    console.log('hola');
  }




}
