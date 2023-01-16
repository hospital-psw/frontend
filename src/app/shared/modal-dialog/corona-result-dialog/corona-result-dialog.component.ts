import { Component, Inject } from '@angular/core';
import { CoronaResultsData } from '../interface/CoronaReultsData';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-corona-result-dialog',
  templateUrl: './corona-result-dialog.component.html',
  styleUrls: ['./corona-result-dialog.component.scss']
})
export class CoronaResultDialogComponent {
  constructor(public dialogRef: MatDialogRef<CoronaResultDialogComponent>, 
              @Inject(MAT_DIALOG_DATA) public data: CoronaResultsData){}

    onClose(): void{
      this.dialogRef.close();
    }

    handlePrediction(){
      if(this.data.prediction === 'Positive')
        return true
    
      return false;
    }
  }
