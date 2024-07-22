import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubSectionService {
  private apiUrl = `${environment.apiUrl}/Subsections`;
  private token: string | null = localStorage.getItem('token'); // Get the token from local storage

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    if (this.token) {
      headers = headers.append('Authorization', `Bearer ${this.token}`);
    }
    return headers;
  }

  getAllSubSections(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  addSubSection(subsection: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, subsection, { headers: this.getHeaders() });
  }

  updateSubSection(subsection: any): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${subsection.id}`, subsection, { headers: this.getHeaders() });
  }

  deleteSubSection(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }

  getSubSection(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }
}
