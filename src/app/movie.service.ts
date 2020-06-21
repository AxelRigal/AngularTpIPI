import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from 'movie';

@Injectable({
    providedIn: 'root'
  })
export class MovieService{
    apiUrl = `${environment.apiUrl}`;

    constructor (private httpClient: HttpClient){

    }

    getFromTitle(string ): Observable<Array<Movie>>{
        return this.httpClient.get<Array<Movie>>(this.apiUrl);
    }


}