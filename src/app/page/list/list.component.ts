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
}
