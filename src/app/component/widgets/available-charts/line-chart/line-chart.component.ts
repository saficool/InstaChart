import { Component, inject, Input } from '@angular/core';
import { IChartConfiguration } from '../../../../interfaces/chart-configuration-manager.interface';
import { ChartTypeEnum } from '../../../../enums/chart-types.enum';
import { ChartDataManagerService } from '../../../../services/chart-data-manager.service';
import { IChartData } from '../../../../interfaces/chart-data-manager.interface';
import { FormsModule } from '@angular/forms';
import { AggregateFunctionEnum } from '../../../../enums/aggregate-function.enum';
import { EnumToArrayPipe } from '../../../../pipes/enum-to-array.pipe';
import { ILineAggregateNumericalObject } from '../../../../interfaces/chart-data-object/line-chart-data-object.interface';
import { ChartSeriesDataPreparationService } from '../../../../services/chart-series-data-preparation.service';
import { AggregateFunctionsService } from '../../../../services/aggregate-functions.service';
import { RandomNumberGeneratorService } from '../../../../services/random-number-generator.service';
import { ChartConfigurationManagerService } from '../../../../services/chart-configuration-manager.service';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [FormsModule, EnumToArrayPipe],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent {

  @Input() chartConfiguration: IChartConfiguration
  protected chartData: IChartData = { chart_data: [], chart_data_column_types: undefined }
  protected aggregate_functions = AggregateFunctionEnum

  private chartDataManagerService = inject(ChartDataManagerService)
  private chartSeriesDataPreparationService = inject(ChartSeriesDataPreparationService)
  private randomNumberGeneratorService = inject(RandomNumberGeneratorService)
  private chartConfigurationManagerService = inject(ChartConfigurationManagerService)

  constructor() {
    this.chartConfiguration = {
      id: 0,
      columns: 0,
      type: ChartTypeEnum.LINE,
      title: '',
      data_object: undefined,
      options: undefined
    }
  }

  ngOnInit(): void {
    this.getChartData()
    console.log(this.chartConfiguration)
  }

  async getChartData() {
    await this.chartDataManagerService.GetChartData()
      .then((data: IChartData) => {
        this.chartData = data
      })
    console.log(this.chartData)
  }

  protected addAggregateNumericalObject() {
    const aggregateNumericalObject: ILineAggregateNumericalObject = {
      numerical_column: this.chartData.chart_data_column_types?.numerical[0]!,
      aggregate_function: AggregateFunctionEnum.COUNT
    }
    this.chartConfiguration.data_object?.aggregate_numerical_objects.push(aggregateNumericalObject)
  }

  protected removeAggregateNumericalObject(index: number) {
    this.chartConfiguration.data_object?.aggregate_numerical_objects.splice(index, 1)
  }

  protected async saveChartConfiguration() {
    await this.chartSeriesDataPreparationService.lineChartSeriesData(this.chartConfiguration.data_object!, this.chartData.chart_data, new AggregateFunctionsService)
      .then((data: any) => {
        this.chartConfiguration.options.xAxis.data = data.xAxis
        this.chartConfiguration.options.series = data.series
      });
    this.chartConfiguration.options.title.text = this.chartConfiguration.title
    if (this.chartConfiguration.id == 0) {
      this.chartConfiguration.id = this.randomNumberGeneratorService.GenerateRandomNumber()
      const _chartConfiguration = JSON.parse(JSON.stringify(this.chartConfiguration))
      this.chartConfigurationManagerService.AddConfiguration(_chartConfiguration)
    }
    else {
      const _chart_configuration_template = JSON.parse(JSON.stringify(this.chartConfiguration))
      this.chartConfigurationManagerService.UpdateConfiguration(_chart_configuration_template.id, _chart_configuration_template)
    }
  }
}
