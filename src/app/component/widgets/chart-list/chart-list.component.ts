import { Component, inject } from '@angular/core';
import { DynamicDialogService } from '../../../services/dynamic-dialog.service';
import { StringTransformerService } from '../../../services/string-transformer.service';
import { ConfirmationService } from 'primeng/api';
import { ChartConfigurationManagerService } from '../../../services/chart-configuration-manager.service';
import { IDynamicDialog, IDynamicDialogConfig } from '../../../interfaces/dynamic-dialog.interface';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { IChartConfiguration } from '../../../interfaces/chart-configuration-manager.interface';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { NewChartPlaceholderComponent } from '../new-chart-placeholder/new-chart-placeholder.component';

@Component({
  selector: 'app-chart-list',
  standalone: true,
  imports: [ConfirmDialogModule],
  providers: [ConfirmationService],
  templateUrl: './chart-list.component.html',
  styleUrl: './chart-list.component.scss'
})
export class ChartListComponent {

  protected chartsService = inject(ChartConfigurationManagerService)
  private dynamicDialogService: IDynamicDialog = inject(DynamicDialogService)
  private stringTransformerService = inject(StringTransformerService)
  private confirmationService = inject(ConfirmationService)

  async editThisChart(chart_configs: IChartConfiguration) {
    const config: DynamicDialogConfig = {
      data: chart_configs,
      header: `${this.stringTransformerService.ConvertToTitleCase(chart_configs.type)} Chart`,
      width: '30vw',
      height: 'auto',
      closeOnEscape: false,
      modal: true,
      resizable: false,
      draggable: true,
      maximizable: false,
      position: "center"
    }
    const dynamicDialogConfig = { component: NewChartPlaceholderComponent, config: config };
    this.dynamicDialogService.ShowDialog(dynamicDialogConfig);
  }

  removeThisChart(index: number, event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      // defaultFocus: 'reject',
      acceptIcon: "none",
      rejectIcon: "none",
      rejectButtonStyleClass: "p-button-text",
      accept: () => {
        this.chartsService.RemoveConfiguration(index)
      },
      reject: () => { }
    });
  }

}
