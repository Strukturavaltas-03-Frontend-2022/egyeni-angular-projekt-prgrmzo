import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
import { PaintingFilterComponent } from './common/painting-filter/painting-filter.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SortPipe } from './pipe/sort.pipe';
import { FilterPipe } from './pipe/filter.pipe';

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
    PaintingFilterComponent,
    SortPipe,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
