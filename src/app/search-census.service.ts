
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Gnome } from './hall/census/gnome/gnome';
import { Router } from '@angular/router';

@Injectable()
export class Search {

    serviceUrl: string = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';
    brastlewark: IBrastlewark;
    inhabitants: Gnome[] = [];

    constructor(private http: HttpClient, private router: Router) {}

    findAllInhabitants(): Observable<IBrastlewark> {
        if (this.brastlewark) {
            return of(this.brastlewark);
        }
        return this.http.get<IBrastlewark>(this.serviceUrl).pipe(
            catchError(this.handleError)
        );
    }

    getGnome(id: number): Observable<Gnome> {
        var subject = new Subject<Gnome>();
        if (this.inhabitants.length === 0) {
            this.findAllInhabitants().subscribe(data => {
                this.inhabitants = data.Brastlewark;
                subject.next(this.inhabitants.find(gnome => gnome.id === id));
            });
            return subject.asObservable();
        } else {
            return of(this.inhabitants.find(gnome => gnome.id === id));
        }
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