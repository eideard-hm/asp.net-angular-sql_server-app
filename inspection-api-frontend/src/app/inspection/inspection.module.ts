import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InspectionComponent } from './inspection.component';
import { ShowInspectionComponent } from './show-inspection/show-inspection.component';
import { AddEditInspectionComponent } from './add-edit-inspection/add-edit-inspection.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InspectionComponent,
    ShowInspectionComponent,
    AddEditInspectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InspectionComponent,
    ShowInspectionComponent,
    AddEditInspectionComponent
  ]
})
export class InspectionModule { }
