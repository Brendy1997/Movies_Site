import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Genre } from 'src/app/class/genre';
import { Movie } from 'src/app/class/movie';
import { SingleMovie } from 'src/app/class/single-movie';
import { MoviesService } from 'src/app/services/movies.service';
import { MoviesComponent } from '../movies/movies.component';

@Component({
  selector: 'app-movie-single',
  templateUrl: './movie-single.component.html',
  styleUrls: ['./movie-single.component.scss']
})
export class MovieSingleComponent implements OnInit {

  id: string='';
  peli: SingleMovie;
  relatedMovies: Movie[]=[];
  runtime='';
  slideConfig1 = {'slidesToShow': 7, 'slidesToScroll': 3, 'infinite' : false};
  slideConfig = {'slidesToShow': 5, 'slidesToScroll': 3, 'infinite' : false};
  isLoadingResults= false;

  constructor(private movieSvc: MoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {


    this.route.params.subscribe((params: Params)=>{
      this.isLoadingResults= true;
      this.id=params.id;
      let sub = this.movieSvc.getMovieId(this.id).subscribe((response)=>{
        sub.unsubscribe();
        this.peli= response;
        if(this.peli.runtime%60<10){
          this.runtime= Math.trunc(this.peli.runtime/60).toString()+'h '+(this.peli.runtime%60).toString()+'m';
        }
        else{
          this.runtime= Math.trunc(this.peli.runtime/60).toString()+'h '+(this.peli.runtime%60).toString()+'m';
        }


        console.log(this.peli);

        let sub1= this.movieSvc.getRelatedMovies(this.id).subscribe((response)=>{
          sub.unsubscribe();
          this.relatedMovies= response.results;
          this.isLoadingResults=false;
        });


      });



    });

  }

}
