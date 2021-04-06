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
    const opts = { params: new HttpParams({fromString: 'api_key=c128aa2170b19b126c3e82f424296617&append_to_response=credits'}) };
    return this.http.get<SingleMovie>(environment.endpoints.baseUrl+environment.endpoints.movie+id,opts);
   }

   getRelatedMovies(id:string): Observable<Moviearray>{
    const opts = { params: new HttpParams({fromString: 'api_key=c128aa2170b19b126c3e82f424296617'}) };
    return this.http.get<Moviearray>(environment.endpoints.baseUrl+environment.endpoints.movie+id+'/similar',opts);
   }

   searchIdkey(keywords: string): any{
     const opts = { params: new HttpParams({fromString: 'api_key=c128aa2170b19b126c3e82f424296617&query='+keywords})};
     return this.http.get<any>(environment.endpoints.baseUrl+environment.endpoints.search,opts);
   }

   searchMoviebyIdkey(ids: string): any{

    const opts = { params: new HttpParams({fromString: 'api_key=c128aa2170b19b126c3e82f424296617&sort_by=popularity.desc&with_keywords='+ids}) };
    return this.http.get<any>(environment.endpoints.baseUrl+environment.endpoints.discover,opts);
   }


   searchbyGenre(genre: string, page:string):any{
    const opts = { params: new HttpParams({fromString: 'api_key=c128aa2170b19b126c3e82f424296617&sort_by=release_date.desc&release_date.lte=2021-04-01&with_genres='
    +genre+'&page='+page}) };
    return this.http.get<any>(environment.endpoints.baseUrl+environment.endpoints.discover,opts);
   }
}
