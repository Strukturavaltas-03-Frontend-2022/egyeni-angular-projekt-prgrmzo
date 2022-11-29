import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingFilterComponent } from './painting-filter.component';

describe('PaintingFilterComponent', () => {
  let component: PaintingFilterComponent;
  let fixture: ComponentFixture<PaintingFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaintingFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaintingFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
