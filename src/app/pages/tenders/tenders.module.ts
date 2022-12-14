import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveTendersComponent } from './components/active-tenders/active-tenders.component';
import { MaterialModule } from 'src/app/material/material.module';
import { TenderDetailsComponent } from './components/tender-details/tender-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    ActiveTendersComponent,
    TenderDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    MatSelectModule,
  ]
})
export class TendersModule { }
