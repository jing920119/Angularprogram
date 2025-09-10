import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { ListquestionComponent } from './listquestion/listquestion.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLinkActive,
    RouterLink,
    QuestionnaireComponent,
    ListquestionComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'program';

  constructor(private router: Router) { }

  changePage(Page: number) {
    if (Page == 0) {
      this.router.navigateByUrl('/');
    } else if (Page == 1) {
      this.router.navigateByUrl('/questionnaire');
    } else if (Page == 2) {
      this.router.navigateByUrl('/Listquestion');
    }

  }
}
