
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Gnome } from './census/gnome/gnome';

@Injectable()
export class Search {

    serviceUrl: string = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

    constructor(private http: HttpClient) {}

    findAllInhabitants(): Observable<Gnome[]> {
        return this.http.get<Gnome[]>(this.serviceUrl).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: any) {
        if (error instanceof Response) {
            return Observable.throw(error.text());
        }
        return Observable.throw(error);
    }

}