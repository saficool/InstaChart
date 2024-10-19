import { Component, effect, inject } from '@angular/core';
import { DynamicDialogService } from '../../../services/dynamic-dialog.service';
import { IDynamicDialog, IDynamicDialogConfig } from '../../../interfaces/dynamic-dialog.interface';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { NewChartPlaceholderComponent } from '../new-chart-placeholder/new-chart-placeholder.component';
import { ChartJsonTemplateService } from '../../../services/chart-json-template.service';
import { ChartTypeEnum } from '../../../enums/chart-types.enum';
import { EChartsOption } from 'echarts';
import { IChartConfiguration } from '../../../interfaces/chart-configuration-manager.interface';
import { ILineDataObject } from '../../../interfaces/chart-data-object/line-chart-data-object.interface';
import { AggregateFunctionEnum } from '../../../enums/aggregate-function.enum';
import { ChartDataManagerService } from '../../../services/chart-data-manager.service';

@Component({
  selector: 'app-new-chart',
  standalone: true,
  imports: [],
  templateUrl: './new-chart.component.html',
  styleUrl: './new-chart.component.scss'
})
export class NewChartComponent {

  protected hasChartData: boolean = false
  private lineChartConfiguration: IChartConfiguration

  private chartDataManagerService = inject(ChartDataManagerService)
  private dynamicDialogService: IDynamicDialog = inject(DynamicDialogService)
  private chartJsonTemplateService = inject(ChartJsonTemplateService)

  constructor() {
    effect(() => { this.hasChartData = this.chartDataManagerService.hasChartData() });
    const lineDataObject: ILineDataObject = {
      categorical_column: "",
      aggregate_numerical_objects: [
        { numerical_column: "", aggregate_function: AggregateFunctionEnum.COUNT }
      ]
    }
    this.lineChartConfiguration = {
      id: 0,
      columns: 6,
      type: ChartTypeEnum.LINE,
      title: '',
      options: undefined,
      data_object: lineDataObject
    }

  }

  ngOnInit(): void {
    this.getLineChartConfiguration()
  }

  ngOnDestroy(): void {
  }

  private getLineChartConfiguration() {
    this.chartJsonTemplateService.GetChartsOptionsTemplate(ChartTypeEnum.LINE)
      .then((data: any) => {
        this.lineChartConfiguration.options = data
        this.lineChartConfiguration.title = data.title!.text
      })
  }

  protected viewNewChartPlaceholder() {
    console.log(this.lineChartConfiguration)
    const config: DynamicDialogConfig = {
      data: this.lineChartConfiguration,
      header: "New Chart",
      width: '500px',
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
