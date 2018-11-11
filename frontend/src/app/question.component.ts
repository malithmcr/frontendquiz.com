import { Component } from '@angular/core';

@Component({
    selector: 'question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})

export class QuestionComponent {
    title = 'FrontendQuiz.com';
    start() {
        console.log("started");
    }
}