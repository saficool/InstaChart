import { Injectable } from '@angular/core';
import { ILineAggregateNumericalObject, ILineDataObject } from '../interfaces/chart-data-object/line-chart-data-object.interface';
import { AggregateFunctionsService } from './aggregate-functions.service';
import { AggregateFunctionEnum } from '../enums/aggregate-function.enum';

@Injectable({
  providedIn: 'root'
})
export class ChartSeriesDataPreparationService {

  constructor() { }

  public lineChartSeriesData(
    data_object: ILineDataObject,
    chart_data: any[],
    aggregateFunctionsService: AggregateFunctionsService
  ): Promise<{ series: any[], xAxis: string[] }> {
    return new Promise((resolve, reject) => {
      try {
        let _xAxis: Set<string> = new Set<string>();
        let _data: any[] = [];
        const aggregate_numerical_objects = data_object.aggregate_numerical_objects!;

        aggregate_numerical_objects.forEach((aggregate_numerical_object: ILineAggregateNumericalObject) => {
          switch (aggregate_numerical_object.aggregate_function) {
            case AggregateFunctionEnum.AVG:
              const result_avg = aggregateFunctionsService.aggregateAverageByCategory(
                chart_data,
                data_object.categorical_column,
                aggregate_numerical_object.numerical_column
              );
              _data.push({
                name: aggregate_numerical_object.numerical_column,
                type: 'line',
                label: { show: true },
                data: result_avg.map(m => Number(m.value.toFixed(2)))
              });
              const categories_avg = result_avg.map(m => m.category);
              categories_avg.forEach(category => _xAxis.add(category));
              break;

            case AggregateFunctionEnum.COUNT:
              const result_count = aggregateFunctionsService.aggregateCountByCategory(
                chart_data,
                data_object.categorical_column,
                aggregate_numerical_object.numerical_column
              );
              _data.push({
                name: aggregate_numerical_object.numerical_column,
                type: 'line',
                label: { show: true },
                data: result_count.map(m => Number(m.value.toFixed(2)))
              });
              const categories_count = result_count.map(m => m.category);
              categories_count.forEach(category => _xAxis.add(category));
              break;

            case AggregateFunctionEnum.MAX:
              const result_max = aggregateFunctionsService.aggregateMaxByCategory(
                chart_data,
                data_object.categorical_column,
                aggregate_numerical_object.numerical_column
              );
              _data.push({
                name: aggregate_numerical_object.numerical_column,
                type: 'line',
                label: { show: true },
                data: result_max.map(m => Number(m.value.toFixed(2)))
              });
              const categories_max = result_max.map(m => m.category);
              categories_max.forEach(category => _xAxis.add(category));
              break;

            case AggregateFunctionEnum.MEDIAN:
              const result_median = aggregateFunctionsService.aggregateMedianByCategory(
                chart_data,
                data_object.categorical_column,
                aggregate_numerical_object.numerical_column
              );
              _data.push({
                name: aggregate_numerical_object.numerical_column,
                type: 'line',
                label: { show: true },
                data: result_median.map(m => Number(m.value.toFixed(2)))
              });
              const categories_median = result_median.map(m => m.category);
              categories_median.forEach(category => _xAxis.add(category));
              break;

            case AggregateFunctionEnum.MIN:
              const result_min = aggregateFunctionsService.aggregateMinByCategory(
                chart_data,
                data_object.categorical_column,
                aggregate_numerical_object.numerical_column
              );
              _data.push({
                name: aggregate_numerical_object.numerical_column,
                type: 'line',
                label: { show: true },
                data: result_min.map(m => Number(m.value.toFixed(2)))
              });
              const categories_min = result_min.map(m => m.category);
              categories_min.forEach(category => _xAxis.add(category));
              break;

            case AggregateFunctionEnum.MODE:
              const result_mode = aggregateFunctionsService.aggregateModeByCategory(
                chart_data,
                data_object.categorical_column,
                aggregate_numerical_object.numerical_column
              );
              _data.push({
                name: aggregate_numerical_object.numerical_column,
                type: 'line',
                label: { show: true },
                data: result_mode.map(m => Number(m.value.toFixed(2)))
              });
              const categories_mode = result_mode.map(m => m.category);
              categories_mode.forEach(category => _xAxis.add(category));
              break;

            case AggregateFunctionEnum.QTL:
              const result_qtl = aggregateFunctionsService.aggregateQuantilesByCategory(
                chart_data,
                data_object.categorical_column,
                aggregate_numerical_object.numerical_column,
                [0.25, 0.5, 0.75, 1]
              );
              _data.push({
                name: aggregate_numerical_object.numerical_column,
                type: 'line',
                label: { show: true },
                data: result_qtl.map(m => Number(m.value.toFixed(2)))
              });
              const categories_qtl = result_qtl.map(m => m.category);
              categories_qtl.forEach(category => _xAxis.add(category));
              break;

            case AggregateFunctionEnum.SD:
              const result_sd = aggregateFunctionsService.aggregateStandardDeviationByCategory(
                chart_data,
                data_object.categorical_column,
                aggregate_numerical_object.numerical_column
              );
              _data.push({
                name: aggregate_numerical_object.numerical_column,
                type: 'line',
                label: { show: true },
                data: result_sd.map(m => Number(m.value.toFixed(2)))
              });
              const categories_sd = result_sd.map(m => m.category);
              categories_sd.forEach(category => _xAxis.add(category));
              break;

            case AggregateFunctionEnum.SUM:
              const result_sum = aggregateFunctionsService.aggregateSumByCategory(
                chart_data,
                data_object.categorical_column,
                aggregate_numerical_object.numerical_column
              );
              _data.push({
                name: aggregate_numerical_object.numerical_column,
                type: 'line',
                label: { show: true },
                data: result_sum.map(m => Number(m.value.toFixed(2)))
              });
              const categories_sum = result_sum.map(m => m.category);
              categories_sum.forEach(category => _xAxis.add(category));
              break;

            case AggregateFunctionEnum.VR:
              const result_vr = aggregateFunctionsService.aggregateVarianceByCategory(
                chart_data,
                data_object.categorical_column,
                aggregate_numerical_object.numerical_column
              );
              _data.push({
                name: aggregate_numerical_object.numerical_column,
                type: 'line',
                label: { show: true },
                data: result_vr.map(m => Number(m.value.toFixed(2)))
              });
              const categories_vr = result_vr.map(m => m.category);
              categories_vr.forEach(category => _xAxis.add(category));
              break;
          }
        });

        resolve({
          series: _data,
          xAxis: [..._xAxis]
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  barChartSeriesData() {
    return null;
  }
}
