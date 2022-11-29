import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
import { PaintingService } from 'src/app/service/painting.service';

@Component({
  selector: 'app-painting-filter',
  templateUrl: './painting-filter.component.html',
  styleUrls: ['./painting-filter.component.scss'],
})
export class PaintingFilterComponent implements OnInit {
  phrase: string = '';
  keyword: string = '';

  paintingFilterKeywords: any[] = this.configService.searchOptions;

  constructor(
    private paintingService: PaintingService,
    private configService: ConfigService
  ) {}

  ngOnInit(): void {}
}
