import { Component, OnInit } from '@angular/core';
import { Painting } from 'src/app/model/painting';
import { PaintingService } from 'src/app/service/painting.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  paintings: Painting[] = [];

  headerSortPhrase: string = '';

  isSorted: boolean = false;

  key: string = '';
  phrase: string = '';

  constructor(private paintingService: PaintingService) {
    this.paintingService.fetchPaintings().subscribe((datalist) => {
      this.paintings = datalist;
    });
  }

  ngOnInit(): void {}

  onDelete(painting: Painting) {
    if (confirm('Are you sure you want to DELETE this painting?')) {
      this.paintingService
        .remove(painting)
        .subscribe((painting) =>
          this.paintingService
            .fetchPaintings()
            .subscribe((paintings) => location.reload())
        );
    }
  }

  onHeaderSort(phrase: string) {
    this.headerSortPhrase = phrase;
    this.isSorted = !this.isSorted;
  }

  onSearchKeyChange(key: string) {
    this.key = key;
  }

  onSearchPhraseChange(phrase: string) {
    this.phrase = phrase;
  }
}
