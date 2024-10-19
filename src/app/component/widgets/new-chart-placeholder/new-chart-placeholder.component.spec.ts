import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewChartPlaceholderComponent } from './new-chart-placeholder.component';

describe('NewChartPlaceholderComponent', () => {
  let component: NewChartPlaceholderComponent;
  let fixture: ComponentFixture<NewChartPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewChartPlaceholderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewChartPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
