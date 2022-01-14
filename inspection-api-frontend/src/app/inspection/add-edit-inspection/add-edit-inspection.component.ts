import { InspectionService } from './../../services/inspection.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Inspection } from '../../interfaces/Inspection';

@Component({
  selector: 'app-add-edit-inspection',
  templateUrl: './add-edit-inspection.component.html',
  styles: [
  ]
})
export class AddEditInspectionComponent implements OnInit {

  @Input() inspection!: Inspection;
  @Input() inspectionTypesList$ !: Observable<any[]>;
  @Output() onSaveInspection: EventEmitter<boolean> = new EventEmitter<boolean>();

  statuses!: Observable<any>;

  constructor(private inspectionService: InspectionService) { }

  ngOnInit(): void {
    this.statuses = this.inspectionService.getStatusList();
  }

  addInspection() {
    this.inspectionService.addInspection(this.inspection)
      .subscribe({
        next: () => this.inspectionAddSuccess(),
        error: (err) => {
          this.onSaveInspection.emit(false);
          console.error(err);
        }
      });
  }

  inspectionAddSuccess() {

    this.onSaveInspection.emit(true);

    const closeModal: HTMLButtonElement | null = document.querySelector('#add-edit-modal-close');
    const alertSuccess: HTMLElement | null = document.querySelector('#inspection-alert-success');

    if (closeModal) {
      closeModal.click();
    }

    if (alertSuccess) {
      alertSuccess.style.display = 'block';

      setTimeout(() => {
        alertSuccess.style.display = 'none';
      }, 4000);
    }
  }

  editInspection() {

  }

}
