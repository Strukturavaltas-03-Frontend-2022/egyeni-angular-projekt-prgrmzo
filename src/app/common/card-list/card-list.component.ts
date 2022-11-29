import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Painting } from 'src/app/model/painting';
import { PaintingService } from 'src/app/service/painting.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  paintings: Painting[] = [];

  page: number = 1;
  pages: number[] = [];

  constructor(private paintingService: PaintingService) {
    this.paintingService.fetchPaintings().subscribe((datalist) => {
      // this.paintings = datalist;
      for (let i = 0; i < Math.ceil(datalist.length / 20); i++) {
        this.pages.push(i + 1);
      }
    });
  }

  onPage(page: number): void {
    this.page = page;
    this.refreshPage();
  }

  prevPage(): void {
    if (this.page > 1) {
      this.page = this.page - 1;
    }
    this.refreshPage();
  }

  nextPage(): void {
    if (this.page !== this.pages.length) {
      this.page = this.page + 1;
    }
    this.refreshPage();
  }

  ngOnInit(): void {}

  refreshPage(): void {
    this.paintingService
      .fetchPaintings(`?_page=${this.page}&_limit=20`)
      .subscribe((dataList) => (this.paintings = dataList));
  }
}
