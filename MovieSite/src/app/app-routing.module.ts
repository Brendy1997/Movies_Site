import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BygenresComponent } from './components/bygenres/bygenres.component';
import { HomeComponent } from './components/home/home.component';
import { MovieSingleComponent } from './components/movie-single/movie-single.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'movies/:tipo', component: MoviesComponent },
  { path: 'movie/:title/:id', component: MovieSingleComponent },
  { path: 'search', component: SearchComponent},
  { path: 'genre/:genre', component: BygenresComponent},

  { path: 'user', loadChildren: () => import('./components/user/user.module').then(m => m.UserModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
