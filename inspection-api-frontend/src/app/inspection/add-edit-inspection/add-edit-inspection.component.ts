import { InspectionService } from './../../services/inspection.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-edit-inspection',
  templateUrl: './add-edit-inspection.component.html',
  styles: [
  ]
})
export class AddEditInspectionComponent implements OnInit {

  @Input() inspection: any;
  @Input() inspectionTypesList$ !: Observable<any[]>;
  @Input() inspectionTypeId: any;

  statuses!: Observable<any>;

  constructor(private inspectionService: InspectionService) { }

  ngOnInit(): void {
    this.statuses = this.inspectionService.getStatusList();
  }

}
