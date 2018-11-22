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
  isFinished: boolean = false;
  questionAnswerd: boolean = false;
  Answers = null;
  percent: number;


  constructor(private api: QuestionsService) { }
  nextQuestion() {
    this.inCorrectAnswer = null;
    this.correctAnswer = null;
    this.questionAnswerd = false;
    
    if(this.activeQuestion !== this.questions.length - 1) {
      this.activeQuestion++
    } else {
      this.isFinished = true;
      this.percent = this.score*100/this.questions.length + 1;

    }
  }

  selectedQuestion(selected) {
    let userAnswer = selected;
    this.correctAnswer = this.questions[this.activeQuestion].Correct;
    this.answerdQuestions = selected;
    if(this.correctAnswer === userAnswer && !this.questionAnswerd) {
       this.score = this.score + 1;
       this.questionAnswerd = true;
    } else {
      this.inCorrectAnswer = selected;
      this.questionAnswerd = true;
    }
    
  }
  ngOnInit() {
    this.api.getQuestions()
      .subscribe( data => this.questions = data );
  }

}
