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
  @Input() inspectionTypeId !: Observable<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
