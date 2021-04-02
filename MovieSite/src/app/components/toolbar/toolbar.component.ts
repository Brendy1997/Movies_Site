import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/class/genre';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  genres: Genre[]=[{id:1,name:'action'}];

  constructor(private movieSvc: MoviesService) { }

  ngOnInit(): void {

    let sub =this.movieSvc.getGenre().subscribe((response)=>{
      sub.unsubscribe();
      this.genres= response.genres;

    });

  }

}
