import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  idset: Set<string>= new Set<string>();
  constructor(private route: ActivatedRoute, private movieSvc: MoviesService) { }

  ngOnInit(): void {
    this.route.queryParamMap
    .subscribe((params) => {
      this.idset.clear();
      if(params.get('q') !== null){
        let s: any;
        s = params.get('q');
        let arr= s.split(' ');
        for(let a of arr){
          this.movieSvc.searchIdkey(a).subscribe((response: any)=>{
            console.log(response);
            for(let id of response.results){
              this.idset.add(id.id);
            }
          });

        }
        let stringid='';
        for( let id of this.idset){
          console.log(id);
          stringid+=id+'|';
        }
        stringid=stringid.substring(0,stringid.length-1);
        this.movieSvc.searchMoviebyIdkey(stringid).subscribe((response: any)=>{
            console.log(response);
        });

      }

    });

  }

}
