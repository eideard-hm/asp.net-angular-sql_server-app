import { Component, OnInit } from '@angular/core';
import { InspectionService } from '../../services/inspection.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-inspection',
  templateUrl: './show-inspection.component.html',
  styleUrls: ['./show-inspection.component.css']
})
export class ShowInspectionComponent implements OnInit {

  inspections$ !: Observable<any[]>;
  inspectionTypes$ !: Observable<any[]>;
  statuses$ !: Observable<any[]>;

  inspectionTypesMap: Map<number, string> = new Map();

  constructor(private inspectionService: InspectionService) { }

  ngOnInit(): void {
    this.inspections$ = this.inspectionService.getInspectionList();
    this.inspectionTypes$ = this.inspectionService.getInspectionTypesList();
    this.statuses$ = this.inspectionService.getStatusList();

    this.refreshInspectionTypesMap();
  }

  refreshInspectionTypesMap(){
    this.inspectionService.getInspectionTypesList()
    .subscribe(data => {
      data.forEach((item: any) => this.inspectionTypesMap.set(item.id, item.inspectionName))
    })
  }

}
