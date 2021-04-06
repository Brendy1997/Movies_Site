import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Movie } from 'src/app/class/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-bygenres',
  templateUrl: './bygenres.component.html',
  styleUrls: ['./bygenres.component.scss']
})
export class BygenresComponent implements OnInit {

  resultsLength=0;
  page=1;
  isLoadingResults=false;
  tipo: string='';
  movieList: Movie[]=[];
  pageEvent: any;

  constructor( private route: ActivatedRoute, private movieSvc: MoviesService ) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params)=>{

      this.tipo= params.genre;
      this.CargarPelis(this.page, this.tipo);
      console.log('s');

    });

  }

  CargarPelis(page:number, tipo: string){

      this.movieSvc.searchbyGenre(tipo,page.toString()).subscribe((response: any)=>{
        this.movieList=response.results;
        console.log(this.movieList);
        this.resultsLength= response.total_results;
      });

  }

  PaginatorEvent(event: any){
    this.CargarPelis(event.pageIndex+1, this.tipo);
  }

}
