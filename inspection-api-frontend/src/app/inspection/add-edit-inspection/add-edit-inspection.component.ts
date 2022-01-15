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
        next: () => this.inspectionAddSuccess('inspection-alert-success'),
        error: (err) => {
          this.onSaveInspection.emit(false);
          console.error(err);
        }
      });
  }

  inspectionAddSuccess(alert: string) {

    this.onSaveInspection.emit(true);

    const closeModal: HTMLButtonElement | null = document.querySelector('#add-edit-modal-close');
    const alertShow: HTMLElement | null = document.querySelector(`#${alert}`);

    if (closeModal) {
      closeModal.click();
    }

    if (alertShow) {
      alertShow.style.display = 'block';

      setTimeout(() => {
        alertShow.style.display = 'none';
      }, 4000);
    }
  }

  editInspection(e: any) {
    e.preventDefault();

    this.inspectionService.updateInspection(this.inspection.id, this.inspection)
    .subscribe({
      next: () => this.inspectionAddSuccess('inspection-alert-update'),
      error: (err) => {
        this.onSaveInspection.emit(false);
        console.error(err)
      }
    });
  }
}
