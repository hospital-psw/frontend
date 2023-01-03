import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { ModalDialogData } from "./interface/ModalDialogData";
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
}