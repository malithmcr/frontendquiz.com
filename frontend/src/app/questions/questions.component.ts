import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  public questions = [];
  score = 0;
  answerSelected : number;
  isCorrectAnswer: number;
  activeQuestion = 0;
  answerdQuestions = 0;
  Answers = null;

  constructor(private api: QuestionsService) { }
  nextQuestion() {
    this.answerSelected = null;
    if(this.activeQuestion !== this.questions.length) {
      this.activeQuestion++
    }
  }

  selectedQuestion(selected) {
    let userAnswer = selected;
    
    if(this.questions[this.activeQuestion].Correct === userAnswer) {
      this.score = this.score + 10;
      this.isCorrectAnswer = selected;
    
    } else {
      this.answerSelected = selected;
    }
    
  }
  ngOnInit() {
    this.api.getQuestions()
      .subscribe( data => this.questions = data );
  }

}
