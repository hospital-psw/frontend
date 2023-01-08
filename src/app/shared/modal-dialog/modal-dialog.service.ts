import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
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
}