import { inject, Injectable, Signal, signal } from '@angular/core';
import { IChartData, IChartDataColumnTypes, IChartDataManager } from '../interfaces/chart-data-manager.interface';
import { UtilityFunctionsService } from './utility-functions.service';

@Injectable({
  providedIn: 'root'
})
export class ChartDataManagerService implements IChartDataManager {

  private chartData$: IChartData = { chart_data: [], chart_data_column_types: undefined }
  public hasChartData = signal(false);

  private utilityFunctionsService$ = inject(UtilityFunctionsService)

  constructor() { }

  ImportFile(file: File): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        try {
          const contents = e.target.result;
          const raw_chart_data = this.utilityFunctionsService$.CsvToJson(contents);
          this.chartData$.chart_data = this.utilityFunctionsService$.FormatJsonData(raw_chart_data);
          const column_types = this.utilityFunctionsService$.identifyColumnTypes(this.chartData$.chart_data);
          this.chartData$.chart_data_column_types = { numerical: column_types.numericalColumns, categorical: column_types.categoricalColumns }
          this.updateHasChartData();
          resolve(true);
        }
        catch (error) {
          this.chartData$.chart_data = [];
          this.chartData$.chart_data_column_types = undefined
          resolve(false);
        }
      };
      reader.onerror = (error) => { reject(false); };
      reader.readAsText(file);
    });
  }
  GetChartData(): Promise<IChartData> { return new Promise((resolve) => { setTimeout(() => { resolve(this.chartData$); }, 100); }); }
  ClearChartData(): void { this.chartData$ = { chart_data: [], chart_data_column_types: undefined }; this.updateHasChartData(); }
  UpdateChartDataColumnTypes(columns: IChartDataColumnTypes): void { this.chartData$.chart_data_column_types = columns }
  GetChartDataColumnType(): Promise<IChartDataColumnTypes> { return new Promise((resolve) => { setTimeout(() => { resolve(this.chartData$.chart_data_column_types!); }, 100); }); }

  // Private methods
  private updateHasChartData() { this.hasChartData.set(this.chartData$.chart_data.length > 0); }

}
