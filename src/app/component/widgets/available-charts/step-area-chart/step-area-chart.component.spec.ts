import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepAreaChartComponent } from './step-area-chart.component';

describe('StepAreaChartComponent', () => {
  let component: StepAreaChartComponent;
  let fixture: ComponentFixture<StepAreaChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepAreaChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepAreaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
