import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getQuestions() {
    return this.http.get(this.ROOT_URL)
  }
}
