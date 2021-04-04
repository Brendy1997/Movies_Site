import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Genre } from '../class/genre';
import { Movie } from '../class/movie';
import { Moviearray } from '../class/moviearray';
import { SingleMovie } from '../class/single-movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getPopularMovies(page: number): Observable<Moviearray>{
   const opts = { params: new HttpParams({fromString: 'api_key=c128aa2170b19b126c3e82f424296617&page='+page}) };
   return this.http.get<Moviearray>(environment.endpoints.baseUrl+environment.endpoints.popularmovie,opts);
  }
  getUpcoming(page: number): Observable<Moviearray>{
    const opts = { params: new HttpParams({fromString: 'api_key=c128aa2170b19b126c3e82f424296617&page='+page}) };
    return this.http.get<Moviearray>(environment.endpoints.baseUrl+environment.endpoints.upcoming,opts);
   }
   getNowPlaying(page: number): Observable<Moviearray>{
    const opts = { params: new HttpParams({fromString: 'api_key=c128aa2170b19b126c3e82f424296617&page='+page}) };
    return this.http.get<Moviearray>(environment.endpoints.baseUrl+environment.endpoints.nowplaying,opts);
   }
   getTopRated(page: number): Observable<Moviearray>{
    const opts = { params: new HttpParams({fromString: 'api_key=c128aa2170b19b126c3e82f424296617&page='+page}) };
    return this.http.get<Moviearray>(environment.endpoints.baseUrl+environment.endpoints.toprated,opts);
   }

   getGenre(): Observable<any>{
    const opts = { params: new HttpParams({fromString: 'api_key=c128aa2170b19b126c3e82f424296617'}) };
    return this.http.get<any>(environment.endpoints.baseUrl+environment.endpoints.genre,opts);
   }

   getMovieId(id:string): Observable<SingleMovie>{
    const opts = { params: new HttpParams({fromString: 'api_key=c128aa2170b19b126c3e82f424296617'}) };
    return this.http.get<SingleMovie>(environment.endpoints.baseUrl+environment.endpoints.movie+id,opts);
   }
}
