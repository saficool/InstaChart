import { Component, ComponentFactoryResolver, ComponentRef, inject, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { IChartConfiguration } from '../../../interfaces/chart-configuration-manager.interface';
import { AVAILABLE_CHARTS } from '../../../consts/chartly.constants';
import { DomSanitizer } from '@angular/platform-browser';
import { IAvailableChart } from '../../../interfaces/available-chart.interface';
import { StringTransformerService } from '../../../services/string-transformer.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IDynamicDialog, IDynamicDialogConfig } from '../../../interfaces/dynamic-dialog.interface';
import { DynamicDialogService } from '../../../services/dynamic-dialog.service';
import { NewChartTypePickerComponent } from '../new-chart-type-picker/new-chart-type-picker.component';
import { LineChartComponent } from '../available-charts/line-chart/line-chart.component';

@Component({
  selector: 'app-new-chart-placeholder',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-chart-placeholder.component.html',
  styleUrl: './new-chart-placeholder.component.scss'
})
export class NewChartPlaceholderComponent {

  protected available_charts = AVAILABLE_CHARTS
  protected chartConfiguration: IChartConfiguration
  protected selected_chart_available_details!: IAvailableChart
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;
  private componentRef: ComponentRef<any> | null = null;


  private dynamicDialogService: IDynamicDialog = inject(DynamicDialogService)
  private dynamicDialogConfig = inject(DynamicDialogConfig)
  private stringTransformerService = inject(StringTransformerService)
  private sanitizer = inject(DomSanitizer)

  constructor() {
    this.chartConfiguration = JSON.parse(JSON.stringify(this.dynamicDialogConfig.data))
    // this.chartConfiguration = this.dynamicDialogConfig.data
    this.availableChartDetails()
  }

  private availableChartDetails() {
    const result = this.available_charts.find(f => f.chartType == this.chartConfiguration.type)!
    this.selected_chart_available_details = {
      chartType: result.chartType,
      chartTitle: result.chartTitle,
      chartIcon: this.sanitizer.bypassSecurityTrustHtml(result.chartIcon as string),
      chartFormTemplate: result.chartFormTemplate,
    }
  }

  protected pickChartType() {
    const config: DynamicDialogConfig = {
      header: "Select Chart Type",
      width: '500px',
      closeOnEscape: false,
      modal: true,
      resizable: false,
      draggable: true,
      maximizable: false,
      position: "center"
    }
    const dynamicDialogConfig: IDynamicDialogConfig = {
      component: NewChartTypePickerComponent,
      config: config
    }
    this.dynamicDialogService.ShowDialog(dynamicDialogConfig);

    this.addChartComponent(LineChartComponent)
    // setTimeout(() => {
    //   this.removeDynamicComponent()
    // }, 10000);
  }

  private addChartComponent<T>(component: Type<T>) {
    this.cleanupCurrentComponent();
    this.componentRef = this.container.createComponent(component);
    return this.componentRef.instance.chartConfiguration = this.chartConfiguration;
  }

  private removeDynamicComponent() {
    this.cleanupCurrentComponent();
  }

  private cleanupCurrentComponent() {
    this.container.clear();
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

  ngOnDestroy() {
    this.cleanupCurrentComponent();
  }

}
