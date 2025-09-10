import { Routes } from '@angular/router';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { ListquestionComponent } from './listquestion/listquestion.component';

export const routes: Routes = [
  { path: 'questionnaire', component: QuestionnaireComponent },
  { path: 'Listquestion', component: ListquestionComponent },

];
