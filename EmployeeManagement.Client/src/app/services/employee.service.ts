import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = `${environment.apiUrl}/Users`;
  private token: string | null = localStorage.getItem('token'); // Get the token from local storage

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    if (this.token) {
      headers = headers.append('Authorization', `Bearer ${this.token}`);
    }
    return headers;
  }

  getAllEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  addEmployee(employee: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, employee, { headers: this.getHeaders() });
  }

  updateEmployee(employee: any): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${employee.id}`, employee, { headers: this.getHeaders() });
  }

  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }
}
