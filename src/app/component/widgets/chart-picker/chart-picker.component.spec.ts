import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPickerComponent } from './chart-picker.component';

describe('ChartPickerComponent', () => {
  let component: ChartPickerComponent;
  let fixture: ComponentFixture<ChartPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartPickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
