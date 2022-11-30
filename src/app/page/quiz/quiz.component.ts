import { Component, OnInit } from '@angular/core';
import { Painting } from 'src/app/model/painting';
import { PaintingService } from 'src/app/service/painting.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  paintings: Painting[] = [];

  selectedPainting: Painting = new Painting();

  seeSolution: boolean = false;

  constructor(private paintingService: PaintingService) {
    this.paintingService.fetchPaintings().subscribe((datalist) => {
      this.paintings = datalist;
      this.randomPainting(this.paintings);
    });
  }

  ngOnInit(): void {}

  randomPainting(paintings: Painting[]) {
    let random = Math.floor(Math.random() * paintings.length + 1);
    random > paintings.length ? (random = paintings.length) : random;
    this.selectedPainting = paintings[random];
  }

  onGenerateNew() {
    this.randomPainting(this.paintings);
  }
}
