import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './page/cards/cards.component';
import { HomeComponent } from './page/home/home.component';
import { ListComponent } from './page/list/list.component';
import { QuizComponent } from './page/quiz/quiz.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: CardsComponent },
  { path: 'list', component: ListComponent },
  { path: 'quiz', component: QuizComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
