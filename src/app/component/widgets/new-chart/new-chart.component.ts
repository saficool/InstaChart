import { Component, effect, inject } from '@angular/core';
import { DynamicDialogService } from '../../../services/dynamic-dialog.service';
import { IDynamicDialog, IDynamicDialogConfig } from '../../../interfaces/dynamic-dialog.interface';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { NewChartPlaceholderComponent } from '../new-chart-placeholder/new-chart-placeholder.component';
import { MyChartTypeEnum } from '../../../enums/chart-types.enum';
import { IChartConfiguration } from '../../../interfaces/chart-configuration-manager.interface';
import { ILineAggregateNumericalObject, ILineDataObject } from '../../../interfaces/chart-data-object/line-chart-data-object.interface';
import { AggregateFunctionEnum } from '../../../enums/aggregate-function.enum';
import { ChartDataManagerService } from '../../../services/chart-data-manager.service';
import { IMyAvailableChart } from '../../../interfaces/available-chart.interface';
import { MY_AVAILABLE_CHARTS } from '../../../consts/chartly.constants';

@Component({
  selector: 'app-new-chart',
  standalone: true,
  imports: [],
  templateUrl: './new-chart.component.html',
  styleUrl: './new-chart.component.scss'
})
export class NewChartComponent {

  protected available_charts: IMyAvailableChart[] = MY_AVAILABLE_CHARTS

  protected hasChartData: boolean = false
  private lineChartConfiguration!: IChartConfiguration

  private chartDataManagerService = inject(ChartDataManagerService)
  private dynamicDialogService: IDynamicDialog = inject(DynamicDialogService)

  constructor() {
    effect(() => { this.hasChartData = this.chartDataManagerService.hasChartData() });
    this.buildDefaultLineChart()
  }

  ngOnInit(): void {
    this.getLineChartConfiguration(MyChartTypeEnum.LINE)
  }

  ngOnDestroy(): void {
  }

  private buildDefaultLineChart() {
    const aggregate_numerical_object: ILineAggregateNumericalObject[] = [{
      numerical_column: "",
      aggregate_function: AggregateFunctionEnum.COUNT,
      smooth: false,
      step: "start"
    },]
    const lineDataObject: ILineDataObject = {
      categorical_column: "",
      aggregate_numerical_objects: aggregate_numerical_object
    }
    this.lineChartConfiguration = {
      id: 0,
      columns: 6,
      type: MyChartTypeEnum.LINE,
      title: '',
      options: undefined,
      data_object: lineDataObject
    }
  }

  private getLineChartConfiguration(chartType: MyChartTypeEnum) {
    const result = this.available_charts.find(f => f.type == chartType)!
    this.lineChartConfiguration.options = result.options
    this.lineChartConfiguration.title = result.options.title.text
  }

  protected viewNewChartPlaceholder() {
    const config: DynamicDialogConfig = {
      data: this.lineChartConfiguration,
      header: "New Chart",
      width: '500px',
      height: "auto",
      closeOnEscape: false,
      modal: true,
      resizable: false,
      draggable: true,
      maximizable: false,
      position: "center"
    }
    const dynamicDialogConfig: IDynamicDialogConfig = {
      component: NewChartPlaceholderComponent,
      config: config
    }
    this.dynamicDialogService.ShowDialog(dynamicDialogConfig);
  }

}
