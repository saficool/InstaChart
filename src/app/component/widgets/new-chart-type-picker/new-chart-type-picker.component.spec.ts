import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewChartTypePickerComponent } from './new-chart-type-picker.component';

describe('NewChartTypePickerComponent', () => {
  let component: NewChartTypePickerComponent;
  let fixture: ComponentFixture<NewChartTypePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewChartTypePickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewChartTypePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
