import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { IDynamicDialog, IDynamicDialogConfig } from '../interfaces/dynamic-dialog.interface';

@Injectable({
  providedIn: 'root'
})
export class DynamicDialogService implements IDynamicDialog {

  ref: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService) { }

  ShowDialog(dynamicDialogConfig: IDynamicDialogConfig): void { this.ref = this.dialogService.open(dynamicDialogConfig.component, dynamicDialogConfig.config); }
  CloseDialog(): void { this.ref?.close() }
}
