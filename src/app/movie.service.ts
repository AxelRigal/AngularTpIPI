import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../app/movie.model';
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
  })
export class MovieService{
    apiUrl = `${environment.apiUrl}`;

    constructor (private httpClient: HttpClient){
    }

    getFromTitle(title: string ): Observable<Array<Movie>>{
        console.log(this.httpClient.get<Array<Movie>>(`${this.apiUrl}&s=${title}`));
        
        return this.httpClient.get<Array<Movie>>(`${this.apiUrl}&s=${title}`);
    }

    getTitleTest(title: string) : Observable<Movie[]>{
        return this.httpClient
            .get(`${this.apiUrl}&s=${title}`)
            .pipe(
                map(result => result['search'])
            );
    }
}