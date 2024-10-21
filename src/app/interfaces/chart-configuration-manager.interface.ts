import { MyChartTypeEnum } from "../enums/chart-types.enum"
import { ILineDataObject } from "./chart-data-object/line-chart-data-object.interface";
import { IBarDataObject } from "./chart-data-object/bar-chart-data-object.interface";

export interface IChartConfiguration {
    id: number,
    title: string,
    type: MyChartTypeEnum,
    data_object: any | undefined, //ILineDataObject | IBarDataObject
    options: any | undefined //EChartsOption,
    columns: number,
}