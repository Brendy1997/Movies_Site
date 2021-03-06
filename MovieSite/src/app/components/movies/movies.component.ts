import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Movie } from 'src/app/class/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  resultsLength=0;
  page=1;
  isLoadingResults=false;
  tipo: string='';
  movieList: Movie[]=[];
  pageEvent: any;

  constructor(private movieSvc: MoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params)=>{

      this.tipo= params.tipo;
      this.CargarPelis(this.page);


    });


  }

  CargarPelis(page: number){
    switch(this.tipo){
      case 'populars':{
        this.isLoadingResults=true;
        let sub = this.movieSvc.getPopularMovies(page).subscribe((res)=>{
          sub.unsubscribe();
          this.movieList= res.results;
          this.isLoadingResults=false;
          this.resultsLength= res.total_results;
        });
        break;
      }
      case 'upcoming':{
        let sub = this.movieSvc.getUpcoming(page).subscribe((res)=>{
          sub.unsubscribe();
          this.movieList= res.results;
          this.isLoadingResults=false;
          this.resultsLength= res.total_results;
        });
        break;
      }
      case 'toprated':{
        let sub = this.movieSvc.getTopRated(page).subscribe((res)=>{
          sub.unsubscribe();
          this.movieList= res.results;
          this.isLoadingResults=false;
          this.resultsLength= res.total_results;
        });
        break;
      }
      case 'nowplaying':{
        let sub = this.movieSvc.getNowPlaying(page).subscribe((res)=>{
          sub.unsubscribe();
          this.movieList= res.results;
          this.isLoadingResults=false;
          this.resultsLength= res.total_results;
        });
        break;
      }
    }

  }

  PaginatorEvent(event: any){
    this.CargarPelis(event.pageIndex+1);
  }

}
