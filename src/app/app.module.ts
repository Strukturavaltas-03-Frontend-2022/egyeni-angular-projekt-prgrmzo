import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './page/list/list.component';
import { PaintingEditorComponent } from './page/painting-editor/painting-editor.component';
import { HomeComponent } from './page/home/home.component';
import { CardsComponent } from './page/cards/cards.component';
import { QuizComponent } from './page/quiz/quiz.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PaintingCardComponent } from './common/painting-card/painting-card.component';
import { CardListComponent } from './common/card-list/card-list.component';
import { WishlistPipe } from './pipe/wishlist.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    PaintingEditorComponent,
    HomeComponent,
    CardsComponent,
    QuizComponent,
    NavigationComponent,
    PaintingCardComponent,
    CardListComponent,
    WishlistPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
