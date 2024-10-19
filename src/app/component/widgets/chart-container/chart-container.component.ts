import { Component, inject } from '@angular/core';
import { ChartConfigurationManagerService } from '../../../services/chart-configuration-manager.service';
import { ChartCanvasComponent } from '../chart-canvas/chart-canvas.component';
import { provideEcharts } from 'ngx-echarts';

@Component({
  selector: 'app-chart-container',
  standalone: true,
  imports: [ChartCanvasComponent],
  providers: [provideEcharts(),],
  templateUrl: './chart-container.component.html',
  styleUrl: './chart-container.component.scss'
})
export class ChartContainerComponent {

  protected chartsService = inject(ChartConfigurationManagerService)

}
