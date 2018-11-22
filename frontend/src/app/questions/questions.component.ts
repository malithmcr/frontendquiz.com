import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  public questions = [];
  score = 0;
  correctAnswer: number = null;
  inCorrectAnswer: number = null;
  activeQuestion = 0;
  answerdQuestions: number = null;
  questionAnswerd: boolean = false;
  Answers = null;

  constructor(private api: QuestionsService) { }
  nextQuestion() {
    
    this.inCorrectAnswer = null;
    this.correctAnswer = null;

    if(this.activeQuestion !== this.questions.length) {
      this.activeQuestion++
    }
  }

  selectedQuestion(selected) {
    let userAnswer = selected;
    this.correctAnswer = this.questions[this.activeQuestion].Correct;
    this.answerdQuestions = selected;
    this.questionAnswerd = true;
    if(this.correctAnswer === userAnswer) {
       this.score = this.score + 10;
    } else {
      this.inCorrectAnswer = selected;
    }
    
  }
  ngOnInit() {
    this.api.getQuestions()
      .subscribe( data => this.questions = data );
  }

}
