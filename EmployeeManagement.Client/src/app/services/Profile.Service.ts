import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
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

  getAllProfiles(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  addProfile(profile: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, profile, { headers: this.getHeaders() });
  }

  updateProfile(profile: any): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${profile.id}`, profile, { headers: this.getHeaders() });
  }

  deleteProfile(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }
}
