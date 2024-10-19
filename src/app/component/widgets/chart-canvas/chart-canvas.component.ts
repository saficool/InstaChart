import { Component, input } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';

@Component({
  selector: 'app-chart-canvas',
  standalone: true,
  imports: [NgxEchartsDirective],
  providers: [provideEcharts()],
  templateUrl: './chart-canvas.component.html',
  styleUrl: './chart-canvas.component.scss'
})
export class ChartCanvasComponent {
  chartOption = input<EChartsOption>()

  ngOnInit(): void { }
}
