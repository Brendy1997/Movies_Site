import { Movie } from "./movie";

export interface Moviearray {
  results: Movie[];
  page: number;
  total_pages: number;
   total_results: number;
}
