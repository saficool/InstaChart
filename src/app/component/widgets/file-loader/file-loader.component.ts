import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ChartDataManagerService } from '../../../services/chart-data-manager.service';
import { IChartDataManager } from '../../../interfaces/chart-data-manager.interface';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { IDynamicDialog, IDynamicDialogConfig } from '../../../interfaces/dynamic-dialog.interface';
import { ViewChartDataComponent } from '../view-chart-data/view-chart-data.component';
import { DynamicDialogService } from '../../../services/dynamic-dialog.service';
import { ColumnTypesContainerComponent } from '../column-types-container/column-types-container.component';

@Component({
  selector: 'app-file-loader',
  standalone: true,
  imports: [],
  templateUrl: './file-loader.component.html',
  styleUrl: './file-loader.component.scss'
})
export class FileLoaderComponent {

  @ViewChild('fileInput') fileInput!: ElementRef;
  protected loading: boolean = false
  protected fileUploaded: boolean = false

  private chartDataService: IChartDataManager = inject(ChartDataManagerService)
  dynamicDialogService: IDynamicDialog = inject(DynamicDialogService)

  protected onFileChange(event: any) {
    // const file: File = event.target.files[0];
    this.chartDataService.ClearChartData()
    this.fileUploaded = false
  }

  protected async importFile() {
    this.fileUploaded = false
    const file: File = this.fileInput.nativeElement.files[0]
    if (file) {
      this.loading = true
      await this.chartDataService.ImportFile(file)
        .then(data => { this.loading = false; this.fileUploaded = true })
        .catch(data => { this.loading = false; this.fileUploaded = false })
    }
  }

  protected viewChartData() {
    const config: DynamicDialogConfig = {
      header: "View Data",
      width: 'auto',
      closeOnEscape: false,
      modal: true,
      resizable: true,
      draggable: false,
      maximizable: true,
      position: "center"
    }
    const dynamicDialogConfig: IDynamicDialogConfig = {
      component: ViewChartDataComponent,
      config: config
    }
    this.dynamicDialogService.ShowDialog(dynamicDialogConfig);
  }

  protected viewHeaders() {
    const config: DynamicDialogConfig = {
      header: "Headers",
      width: '400px',
      closeOnEscape: false,
      modal: true,
      resizable: false,
      draggable: true,
      maximizable: false,
      position: "center"
    }
    const dynamicDialogConfig: IDynamicDialogConfig = {
      component: ColumnTypesContainerComponent,
      config: config
    }
    this.dynamicDialogService.ShowDialog(dynamicDialogConfig);
  }

}
