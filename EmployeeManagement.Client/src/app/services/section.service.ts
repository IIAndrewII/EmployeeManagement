import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  private apiUrl = `${environment.apiUrl}/Sections`;
  private token: string | null = localStorage.getItem('token'); // Get the token from local storage

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    if (this.token) {
      headers = headers.append('Authorization', `Bearer ${this.token}`);
    }
    return headers;
  }

  getAllSections(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  addSection(section: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, section, { headers: this.getHeaders() });
  }

  updateSection(section: any): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${section.id}`, section, { headers: this.getHeaders() });
  }

  deleteSection(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }
  
  getSection(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }
}
