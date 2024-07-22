import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from '../models/department.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiUrl = `${environment.apiUrl}/Departments`;
  private token: string | null = localStorage.getItem('token'); // Get the token from local storage

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    if (this.token) {
      headers = headers.append('Authorization', `Bearer ${this.token}`);
    }
    return headers;
  }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  addDepartment(department: Department): Observable<Department> {
    return this.http.post<Department>(this.apiUrl, department, { headers: this.getHeaders() });
  }

  updateDepartment(department: Department): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${department.id}`, department, { headers: this.getHeaders() });
  }

  deleteDepartment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }
  getDepartment(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }
}
