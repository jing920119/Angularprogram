import { Routes } from '@angular/router';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { ListquestionComponent } from './listquestion/listquestion.component';
import { LoginComponent } from './login/login.component';
import { PreviewComponent } from './preview/preview.component';

export const routes: Routes = [
  {
    path: 'questionnaire', component: QuestionnaireComponent,
    children: [
      { path: 'Listquestion', component: ListquestionComponent },
      { path: 'preview', component: PreviewComponent },
    ]
  },
  {
    path: 'Listquestion', component: ListquestionComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'questionnaire', component: QuestionnaireComponent },

    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'preview', component: PreviewComponent },


];
