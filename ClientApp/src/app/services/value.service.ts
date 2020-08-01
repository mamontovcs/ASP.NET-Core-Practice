import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseValuesURL } from '../baseurl';

@Injectable({
  providedIn: 'root'
})
export class ValueService {

  constructor(private http: HttpClient) { }
   data: string[];

  GetValuesFromDataBase(): Observable<string[]> {
    return this.http.get<string[]>(baseValuesURL + 'api/Values');

  }
}
