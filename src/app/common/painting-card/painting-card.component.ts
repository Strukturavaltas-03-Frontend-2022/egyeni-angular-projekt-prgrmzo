import { Component, Input, OnInit } from '@angular/core';
import { Painting } from 'src/app/model/painting';

@Component({
  selector: 'app-painting-card',
  templateUrl: './painting-card.component.html',
  styleUrls: ['./painting-card.component.scss'],
})
export class PaintingCardComponent implements OnInit {
  @Input() painting: Painting = new Painting();

  constructor() {}

  ngOnInit(): void {}
}
