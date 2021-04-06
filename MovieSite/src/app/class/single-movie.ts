import { Credits } from "./credits";
import { Genre } from "./genre"

export interface SingleMovie {
  adult: boolean;
​
backdrop_path: string;
​
belongs_to_collection: any;
​
budget: number;
​
genres: Genre[];
​
homepage: string;
​
id: string;
​
imdb_id: string;
​
original_language: string;
​
original_title: string;
​
overview: string;
​
popularity: number;
​
poster_path: string;
​
production_companies: any;
​
production_countries: any;
​
release_date: Date;
​
revenue: string;
​
runtime: number;
​
spoken_languages: string[];
​
status: string;
​
tagline: string;
​
title: string;
​
video: boolean;
​
vote_average: number;
​
vote_count: number;

credits: Credits;
}
