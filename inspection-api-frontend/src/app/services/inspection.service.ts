import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class InspectionService {

  constructor(private http: HttpClient) { }

  // requests for the Inspection
  getInspectionList(): Observable<any[]> {
    return this.http.get<any[]>(`${apiUrl}/api/Inspections`);
  }

  getOneInspection(id: number | string){
    return this.http.get(`${apiUrl}/api/Inspections/${id}`);
  }

  addInspection(data: any): Observable<any>{
    return this.http.post(`${apiUrl}/api/Inspections`, data)
  }

  updateInspection(id: number | string, data : any){
    return this.http.put(`${apiUrl}/api/Inspections/${id}`, data);
  }

  deleteInspection(id: number | string){
    return this.http.delete(`${apiUrl}/api/Inspections/${id}`)
  }

  // requests for the Inspection Types
  getInspectionTypesList(): Observable<any[]> {
    return this.http.get<any[]>(`${apiUrl}/api/InspectionTypes`);
  }

  getOneInspectionTypes(id: number | string){
    return this.http.get(`${apiUrl}/api/InspectionTypes/${id}`);
  }

  addInspectionTypes(data: any): Observable<any>{
    return this.http.post(`${apiUrl}/api/InspectionTypes`, data)
  }

  updateInspectionTypes(id: number | string, data : any){
    return this.http.put(`${apiUrl}/api/InspectionTypes/${id}`, data);
  }

  deleteInspectionTypes(id: number | string){
    return this.http.delete(`${apiUrl}/api/InspectionTypes/${id}`)
  }

  // requests for Statuses
  getStatusList(): Observable<any[]> {
    return this.http.get<any[]>(`${apiUrl}/api/Status`);
  }

  getOneStatus(id: number | string){
    return this.http.get(`${apiUrl}/api/Status/${id}`);
  }

  addStatus(data: any): Observable<any>{
    return this.http.post(`${apiUrl}/api/Status`, data)
  }

  updateStatus(id: number | string, data : any){
    return this.http.put(`${apiUrl}/api/Status/${id}`, data);
  }

  deleteStatus(id: number | string){
    return this.http.delete(`${apiUrl}/api/Status/${id}`)
  }
}
