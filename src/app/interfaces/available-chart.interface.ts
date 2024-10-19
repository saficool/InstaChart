import { SafeHtml } from "@angular/platform-browser";
import { ChartTypeEnum } from "../enums/chart-types.enum";
import { Type } from "@angular/core";

export interface IAvailableChart {
    chartType: ChartTypeEnum,
    chartTitle: string,
    chartIcon: SafeHtml,
    chartFormTemplate: Type<any>
}