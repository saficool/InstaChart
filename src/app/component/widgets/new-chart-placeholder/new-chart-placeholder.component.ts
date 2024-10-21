import { Component, ComponentRef, inject, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { IChartConfiguration } from '../../../interfaces/chart-configuration-manager.interface';
import { MY_AVAILABLE_CHARTS } from '../../../consts/chartly.constants';
import { DomSanitizer } from '@angular/platform-browser';
import { IMyAvailableChart } from '../../../interfaces/available-chart.interface';
import { StringTransformerService } from '../../../services/string-transformer.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IDynamicDialog, IDynamicDialogConfig } from '../../../interfaces/dynamic-dialog.interface';
import { DynamicDialogService } from '../../../services/dynamic-dialog.service';
import { OverlayPanel, OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  selector: 'app-new-chart-placeholder',
  standalone: true,
  imports: [CommonModule, FormsModule, OverlayPanelModule],
  templateUrl: './new-chart-placeholder.component.html',
  styleUrl: './new-chart-placeholder.component.scss'
})
export class NewChartPlaceholderComponent {

  protected available_charts: IMyAvailableChart[] = []
  protected selected_available_chart!: IMyAvailableChart

  protected chartConfiguration: IChartConfiguration

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;
  private componentRef: ComponentRef<any> | null = null;


  private dynamicDialogService: IDynamicDialog = inject(DynamicDialogService)
  private dynamicDialogConfig = inject(DynamicDialogConfig)
  private sanitizer = inject(DomSanitizer)

  constructor() {
    this.available_charts = MY_AVAILABLE_CHARTS.map(m => {
      return {
        title: m.title,
        type: m.type,
        options: m.options,
        optionSeriesObject: m.optionSeriesObject,
        icon: this.sanitizer.bypassSecurityTrustHtml(m.icon as string),
        template: m.template
      }
    });

    this.chartConfiguration = JSON.parse(JSON.stringify(this.dynamicDialogConfig.data));
    this.selected_available_chart = this.available_charts.find(f => f.type == this.chartConfiguration.type)!
  }

  ngOnInit(): void {
    this.onSelectChartType(this.selected_available_chart)
  }

  protected onSelectChartType(chartType: IMyAvailableChart, op?: OverlayPanel) {
    if (op) { op.hide(); }
    this.selected_available_chart = chartType
    this.chartConfiguration.type = chartType.type;
    this.chartConfiguration.options = chartType.options
    setTimeout(() => { this.addChartComponent(this.selected_available_chart.template) }, 250);
    console.log(this.chartConfiguration)
  }

  private addChartComponent<T>(component: Type<T>) {
    this.cleanupCurrentComponent();
    this.componentRef = this.container.createComponent(component);
    return this.componentRef.instance.chartConfiguration = this.chartConfiguration;
  }

  private cleanupCurrentComponent() {
    if (this.container) {
      this.container.clear();
    }
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

  ngOnDestroy() {
    this.cleanupCurrentComponent();
  }

}
