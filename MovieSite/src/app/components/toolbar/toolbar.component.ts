import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genre } from 'src/app/class/genre';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  genres: Genre[]=[{id:1,name:'action'}];
  search_string='';

  constructor(private movieSvc: MoviesService, private router: Router) { }

  ngOnInit(): void {

    let sub =this.movieSvc.getGenre().subscribe((response)=>{
      sub.unsubscribe();
      this.genres= response.genres;

    });

  }

  search(){

    if(this.search_string !== ''){
      this.router.navigate(['/search'], { queryParams: {q : this.search_string }});
    }
  }

}
