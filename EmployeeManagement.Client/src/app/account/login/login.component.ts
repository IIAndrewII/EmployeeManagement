import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  login() {
    this.http.post<any>('http://localhost:5000/api/account/login', { email: this.email, password: this.password })
      .subscribe(response => {
        localStorage.setItem('session_token', response.token);
        this.router.navigate(['/users']);
      }, error => {
        alert('Login failed');
      });
  }
}
