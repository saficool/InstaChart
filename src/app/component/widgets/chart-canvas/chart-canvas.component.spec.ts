import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCanvasComponent } from './chart-canvas.component';

describe('ChartCanvasComponent', () => {
  let component: ChartCanvasComponent;
  let fixture: ComponentFixture<ChartCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartCanvasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
