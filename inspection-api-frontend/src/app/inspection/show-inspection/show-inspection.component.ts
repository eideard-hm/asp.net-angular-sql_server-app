import { Component, OnInit } from '@angular/core';
import { InspectionService } from '../../services/inspection.service';
import { Observable } from 'rxjs';
import { Inspection } from '../../interfaces/Inspection';

@Component({
  selector: 'app-show-inspection',
  templateUrl: './show-inspection.component.html',
  styleUrls: ['./show-inspection.component.css']
})
export class ShowInspectionComponent implements OnInit {

  inspections$ !: Observable<Inspection[]>;
  inspectionTypes$ !: Observable<any[]>;
  statuses$ !: Observable<any[]>;

  inspectionTypesMap: Map<number, string> = new Map();

  // properties
  modalTitle: string = '';
  activateAddEditInspectionComponent: boolean = false;
  inspection!: Inspection;

  constructor(private inspectionService: InspectionService) { }

  ngOnInit(): void {
    this.inspections$ = this.inspectionService.getInspectionList();
    this.inspectionTypes$ = this.inspectionService.getInspectionTypesList();

    this.refreshInspectionTypesMap();
  }

  refreshInspectionTypesMap() {
    this.inspectionService.getInspectionTypesList()
      .subscribe(data => {
        data.forEach((item: any) => this.inspectionTypesMap.set(item.id, item.inspectionName))
      })
  }

  modalAdd() {
    this.inspection = {
      id: 0,
      status: '',
      comments: '',
      inspectionTypeId: 0
    }

    this.modalTitle = 'Add Inspection';
    this.activateAddEditInspectionComponent = true;
  }

  closeModal() {
    this.activateAddEditInspectionComponent = false;
  }

  editModal(inspection: Inspection){
    this.inspection = inspection;
    this.modalTitle= 'Edit Inspection';
    this.activateAddEditInspectionComponent = true;
  }

  deleteInspection(id: number){
    if(confirm(`Are you sure you want delelete inspection: ${id}`)){
      this.inspectionService.deleteInspection(id)
      .subscribe({
        next: () => this.deleteInspectionSuccess('inspection-alert-delete'),
        error: (err) => console.error(err)

      })
    }
  }

  deleteInspectionSuccess(alert: string) {

    this.refeshTableInspection(true);
    const alertShow: HTMLElement | null = document.querySelector(`#${alert}`);

    if (alertShow) {
      alertShow.style.display = 'block';

      setTimeout(() => {
        alertShow.style.display = 'none';
      }, 4000);
    }
  }

  refeshTableInspection(isSaveInspection: boolean) {
    if (isSaveInspection) {
      this.inspections$ = this.inspectionService.getInspectionList();
    }
  }

}
