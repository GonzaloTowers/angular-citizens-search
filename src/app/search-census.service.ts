
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Gnome } from './census/gnome/gnome';

@Injectable()
export class Search {

    serviceUrl: string = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';
    inhabitants: Gnome[] = [];

    constructor(private http: HttpClient) {
        this.http.get<IBrastlewark>(this.serviceUrl).subscribe(res => {
            this.inhabitants = res.Brastlewark;
        });
    }

    findAllInhabitants(): Observable<IBrastlewark> {
        return this.http.get<IBrastlewark>(this.serviceUrl).pipe(
            catchError(this.handleError)
        );
    }

    getInhabitantByParams(params: string): Gnome[] {
        return
    }

    getInhabitantByName(name: string): Gnome[] {
        if (name) {
            var gnome: Gnome[] = [];
            gnome.push(this.inhabitants.find(res => res.name === name));
            return gnome;
        }
    }

    private handleError(error: any) {
        if (error instanceof Response) {
            return Observable.throw(error.text());
        }
        return Observable.throw(error);
    }

}

export interface IBrastlewark {
    Brastlewark: any[];
}