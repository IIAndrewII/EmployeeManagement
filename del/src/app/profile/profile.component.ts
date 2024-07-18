import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any = {};

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    this.http.get(`http://localhost:5000/api/users/${this.authService.currentUser.id}`).subscribe(response => {
      this.user = response;
    });
  }

  updateProfile() {
    this.http.put(`http://localhost:5000/api/users/${this.user.id}`, this.user).subscribe(response => {
      alert('Profile updated successfully');
    });
  }
}
