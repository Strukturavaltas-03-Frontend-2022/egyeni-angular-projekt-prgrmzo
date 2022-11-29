import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Painting } from 'src/app/model/painting';
import { PaintingService } from 'src/app/service/painting.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-painting-editor',
  templateUrl: './painting-editor.component.html',
  styleUrls: ['./painting-editor.component.scss'],
})
export class PaintingEditorComponent implements OnInit {
  constructor(
    private pService: PaintingService,
    private ar: ActivatedRoute,
    private router: Router
  ) {}

  painting: Painting = new Painting();

  ngOnInit(): void {
    this.ar.params.subscribe((params) => {
      if (params['id'] === '0') {
        this.painting = new Painting();
      } else {
        this.pService.fetchOne(params['id']).subscribe((painting) => {
          this.painting = painting;
        });
      }
    });
  }

  onSubmit(painting: Painting): void {}
}
