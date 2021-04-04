import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Genre } from 'src/app/class/genre';
import { Movie } from 'src/app/class/movie';
import { SingleMovie } from 'src/app/class/single-movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-single',
  templateUrl: './movie-single.component.html',
  styleUrls: ['./movie-single.component.scss']
})
export class MovieSingleComponent implements OnInit {

  id: string='';
  peli: SingleMovie;
  runtime='';

  constructor(private movieSvc: MoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params)=>{

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

      });



    });

  }

}
