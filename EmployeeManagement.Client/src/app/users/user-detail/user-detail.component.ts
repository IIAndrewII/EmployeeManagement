import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    this.http.get<any>(`http://localhost:5000/api/users/${userId}`)
      .subscribe(data => {
        this.user = data;
      }, error => {
        alert('Failed to fetch user details');
      });
  }
}
