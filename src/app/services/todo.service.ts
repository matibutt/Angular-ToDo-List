import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class TodoService {
  url = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) {}
  getTodoList(): Observable<any>{
    return this.http.get(this.url);
  }
}
