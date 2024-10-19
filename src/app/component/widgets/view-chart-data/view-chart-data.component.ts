import { Component, inject } from '@angular/core';
import { TableModule } from 'primeng/table';
import { IPrimeTableColumn } from '../../../interfaces/prime-table-column.interface';
import { ChartDataManagerService } from '../../../services/chart-data-manager.service';
import { IChartData, IChartDataManager } from '../../../interfaces/chart-data-manager.interface';
import { StringTransformerService } from '../../../services/string-transformer.service';
import { IStringTransformer } from '../../../interfaces/string-transformer.interface';

@Component({
  selector: 'app-view-chart-data',
  standalone: true,
  imports: [TableModule],
  templateUrl: './view-chart-data.component.html',
  styleUrl: './view-chart-data.component.scss'
})
export class ViewChartDataComponent {
  chart_data: IChartData = { chart_data: [], chart_data_column_types: undefined }
  cols!: IPrimeTableColumn[];

  chartDataService: IChartDataManager = inject(ChartDataManagerService)
  stringTransformerService: IStringTransformer = inject(StringTransformerService)

  ngOnInit(): void {
    this.getChartData()
  }

  private getChartData(): void {
    this.chartDataService.GetChartData().then((data: IChartData) => {
      this.chart_data.chart_data = data.chart_data
      this.chart_data.chart_data_column_types = data.chart_data_column_types
      if (this.chart_data.chart_data.length >= 1) {
        this.setFieldAndHeader(this.chart_data.chart_data[0])
      }
    })
  }

  private setFieldAndHeader(data: any) {
    const keys = Object.keys(data)
    this.cols = keys.map((m: string) => {
      return {
        field: m,
        header: this.stringTransformerService.ConvertToTitleCase(m)
      }
    })
  }
}
