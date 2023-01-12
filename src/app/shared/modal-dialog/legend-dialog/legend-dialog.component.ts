import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LegendDialogData } from '../interface/LegendDialogData';

@Component({
  selector: 'app-legend-dialog',
  templateUrl: './legend-dialog.component.html',
  styleUrls: ['./legend-dialog.component.scss']
})
export class LegendDialogComponent {
  constructor(public dialogRef: MatDialogRef<LegendDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: LegendDialogData) {}
  

  onClose(): void {
    this.dialogRef.close();
  }
}
