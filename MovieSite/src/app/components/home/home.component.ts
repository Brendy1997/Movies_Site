import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageEvent: any;
  constructor(private movieSvc: MoviesService) {

  }

  ngOnInit(): void {


  }

  PopularMovies(){
    this.movieSvc.getPopularMovies(1).subscribe((response)=>{
      console.log(response);
    })
  }

  PaginatorEvent(event: any){

    console.log(event.pageIndex);
  }

}
