import { SafeHtml } from "@angular/platform-browser";
import { MyChartTypeEnum } from "../enums/chart-types.enum";
import { Type } from "@angular/core";

export interface IMyAvailableChart {
    title: string,
    type: MyChartTypeEnum,
    options: any,
    optionSeriesObject: {},
    icon: SafeHtml,
    template: Type<any>
}
