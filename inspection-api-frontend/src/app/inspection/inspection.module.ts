import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InspectionComponent } from './inspection.component';
import { ShowInspectionComponent } from './show-inspection/show-inspection.component';
import { AddEditInspectionComponent } from './add-edit-inspection/add-edit-inspection.component';

@NgModule({
  declarations: [
    InspectionComponent,
    ShowInspectionComponent,
    AddEditInspectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InspectionComponent,
    ShowInspectionComponent,
    AddEditInspectionComponent
  ]
})
export class InspectionModule { }
