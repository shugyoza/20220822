import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounceTime, Observable, ReplaySubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  root: string = `https://api.github.com`;
  path: string = `search/users`;
  // query: string = ?q=shugyoza in:login type:user
  users$ = new ReplaySubject<any>();

  constructor(private http: HttpClient) { }

  fetchUsers(_q: string = '', _in: string = 'login', _type: string = 'user'): Observable<any>{
    const endPoint = `${this.root}/${this.path}?q=${_q} in:${_in} type:${_type}`;
    return this.http.get(endPoint)
  }

  getUsers(_query: string = ''): Subscription {
    return this.fetchUsers(_query, 'login', 'user')
    .subscribe({
      next: (users: any[]) => this.users$.next(users),
      error: (err: Error) => console.error(err)
    });
  }

  debounceInput(valChanges: any, eventEmitter: any, delay = 500, subscriptions$: any[]): void {
    subscriptions$.push(valChanges
    .pipe(debounceTime(delay))
    .subscribe({
      next: (val: string) => eventEmitter.emit(val),
      error: (err: Error) => console.error(err)
    }))
  }

}
