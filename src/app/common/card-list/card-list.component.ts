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

  constructor(private paintingService: PaintingService) {
    this.paintingService.fetchPaintings().subscribe((datalist) => {
      console.log(datalist);

      this.paintings = datalist;
      console.log(this.paintings);
    });
  }

  ngOnInit(): void {}
}
