import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EChartsOption } from 'echarts';
import { firstValueFrom } from 'rxjs';
import { ChartTypeEnum } from '../enums/chart-types.enum';

@Injectable({
  providedIn: 'root'
})
export class ChartJsonTemplateService {

  constructor(private http: HttpClient) { }

  async GetChartsOptionsTemplate(chartType: ChartTypeEnum): Promise<EChartsOption> {
    const json_skeleton = await firstValueFrom(this.http.get<any[]>("charts_options_template.json"));
    return json_skeleton.find(f => f.type === chartType).options
  }
}
