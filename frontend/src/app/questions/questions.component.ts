import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  constructor(private api: QuestionsService) { }
  questions: any; 
  ngOnInit() {
    this.questions = this.api.getQuestions();
  }

}
