import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { CoronaResultDialogComponent } from "./corona-result-dialog/corona-result-dialog.component";
import { CoronaResultsData } from "./interface/CoronaReultsData";
import { LegendDialogData } from "./interface/LegendDialogData";
import { ModalDialogData } from "./interface/ModalDialogData";
import { LegendDialogComponent } from "./legend-dialog/legend-dialog.component";
import { ModalDialogComponent } from "./modal-dialog/modal-dialog.component";

@Injectable({providedIn:"root"})
export class ModalDialogService{
    constructor(public dialog: MatDialog){}
    title : string = "Default title"
    description: string = "Default description"

  //YesNo Modal
  public openYesNoDialog(data: ModalDialogData): MatDialogRef<any> {
    return this.dialog.open(ModalDialogComponent, {
      width: "550px",
      data: {
        title: data.title,
        description: data.description
      }
    });
  }
  
  //Legend Modal
  public openLegendDialog(data: LegendDialogData): MatDialogRef<any> {
    return this.dialog.open(LegendDialogComponent, {
      width: "450px",
      data: {
        title: data.title,
      }
    });
  }

  //Corona Modal
  public openCoronaResultsDialog(data: CoronaResultsData): MatDialogRef<any>{
    return this.dialog.open(CoronaResultDialogComponent, {
      width: "550px",
      panelClass: 'app-full-bleed-dialog', 
      height: "350px",
      data: {
        prediction: data.prediction,
        confidence: data.confidence
      }
    });
  }
}