import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  public questions = [];

  constructor(private api: QuestionsService) { }
  
  ngOnInit() {
    this.api.getQuestions()
      .subscribe( data => this.questions = data );
  }

}
