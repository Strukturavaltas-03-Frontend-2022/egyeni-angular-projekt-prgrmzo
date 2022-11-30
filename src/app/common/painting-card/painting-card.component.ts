import { Component, Input, OnInit } from '@angular/core';
import { Painting } from 'src/app/model/painting';
import { PaintingService } from 'src/app/service/painting.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-painting-card',
  templateUrl: './painting-card.component.html',
  styleUrls: ['./painting-card.component.scss'],
})
export class PaintingCardComponent implements OnInit {
  @Input() painting: Painting = new Painting();

  constructor(private paintingService: PaintingService) {}

  ngOnInit(): void {}

  onDelete(painting: Painting) {
    const answer = prompt('Plase type DELETE to remove this painting!');
    if (answer === 'DELETE') {
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
