import { ChartTypeEnum } from "../enums/chart-types.enum"
import { EChartsOption } from "echarts";
import { AggregateFunctionEnum } from "../enums/aggregate-function.enum";
import { ILineDataObject } from "./chart-data-object/line-chart-data-object.interface";
import { IBarDataObject } from "./chart-data-object/bar-chart-data-object.interface";

export interface IChartConfiguration {
    id: number,
    columns: number,
    type: ChartTypeEnum,
    title: string,
    data_object: ILineDataObject | IBarDataObject | undefined,
    options: any | undefined //EChartsOption
}