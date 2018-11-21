import { Component } from '@angular/core';

@Component({
    selector: 'question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})

export class QuestionComponent {
    title = 'FrontendQuiz.com';
    startQuiz: boolean = true;
    startButton: string = 'Start';
    start() {
        this.startQuiz = !this.startQuiz;
        this.startButton = 'Loading...';
    }
}