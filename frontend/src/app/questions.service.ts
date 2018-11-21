import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { IQuestion } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  readonly FETCH_URL = '/assets/data/questions.json';

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<IQuestion[]> {
    return this.http.get<IQuestion[]>(this.FETCH_URL);
  }
}
