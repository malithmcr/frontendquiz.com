import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { IQuestion } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  readonly FETCH_URL_MOCK = '/assets/data/questions.json';
  readonly FETCH_URL_PROD = 'http://localhost:5000/api/v1/questions';

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<IQuestion[]> {
    return this.http.get<IQuestion[]>(this.FETCH_URL_PROD);
  }
}
