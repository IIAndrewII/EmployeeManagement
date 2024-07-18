import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  departments: any[] = [];
  newDepartment = { name: '' };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments() {
    this.http.get('http://localhost:5000/api/departments').subscribe((response: any) => {
      this.departments = response;
    });
  }

  addDepartment() {
    this.http.post('http://localhost:5000/api/departments', this.newDepartment).subscribe(response => {
      this.loadDepartments();
      this.newDepartment.name = '';
    });
  }

  updateDepartment(department: any) {
    this.http.put(`http://localhost:5000/api/departments/${department.id}`, department).subscribe(response => {
      alert('Department updated successfully');
    });
  }
}
