import { Component, OnInit } from '@angular/core';
import { Painting } from 'src/app/model/painting';
import { PaintingService } from 'src/app/service/painting.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  key: string = '';
  phrase: string = '';

  paintings: Painting[] = [];

  onSearchKeyChange(key: string) {
    this.key = key;
  }
  onSearchPhraseChange(phrase: string) {
    this.phrase = phrase;
  }

  constructor(private paintingService: PaintingService) {
    this.paintingService.fetchPaintings().subscribe((datalist) => {
      this.paintings = datalist;
    });
  }

  ngOnInit(): void {}
}
