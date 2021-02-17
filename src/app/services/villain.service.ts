import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

import {MessageService} from './message.service';
import {Mutant} from '../interfaces/mutant';

@Injectable({
  providedIn: 'root'
})
export class VillainService {
  private villiansUrl = 'api/villains';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient,
    private  messageService: MessageService
  ) {
  }

  getVillains(): Observable<Mutant[]> {
    return this.http.get<Mutant[]>(this.villiansUrl)
      .pipe(
        tap(_ => this.log('fetched villains')),
        catchError(this.handleError<Mutant[]>('getVillains', []))
      );
  }
  getVillain(id: number): Observable<Mutant>{
    const url = `${this.villiansUrl}/${id}`;
    return this.http.get<Mutant>(url).pipe(
      tap( _ => this.log(`fetched villain id=${id}`) ),
      catchError(this.handleError<Mutant>(`getVillain id=${id}`))
    );
  }
  getVillianNo404<Data>(id: number): Observable<Mutant> {
    const url = `${this.villiansUrl}/?id=${id}`;
    return this.http.get<Mutant[]>(url)
      .pipe(
        map(villains => villains[0]),
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
          this.log(`${outcome} villain id=${id}`);
        }),
        catchError(this.handleError<Mutant>(` getVillain id=${id}`))
      );
  }

  searchVillais(term: string): Observable<Mutant[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Mutant[]>(`${this.villiansUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found villains matching "${term}"`) :
        this.log(`no villains matching "${term}"`)),
      catchError(this.handleError<Mutant[]>('searchVillains', []))
    );
  }
  addVillain(villain: Mutant): Observable<Mutant> {
    return this.http.post<Mutant>(this.villiansUrl, villain, this.httpOptions).pipe(
      tap((newVillain: Mutant) => this.log(`added villain w/ id=${newVillain.id}`)),
      catchError(this.handleError<Mutant>('addVillain'))
    );
  }
  deleteVillain(villain: Mutant): Observable<Mutant> {
    const id = typeof  villain === 'number' ? villain : villain.id;
    const url = `${this.villiansUrl}/${id}`;
    return this.http.delete<Mutant>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted villain id=${id}`)),
      catchError(this.handleError<Mutant>('deleteVillain'))
    );
  }
  updateVillain(villain: Mutant): Observable<any>{
    return this.http.put<Mutant>(this.villiansUrl, villain, this.httpOptions).pipe(
      tap(_ => this.log(`updated villain id=${villain.id}`)),
      catchError(this.handleError<Mutant>('updateVillain'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`VillainService: ${message}`);
  }
}
