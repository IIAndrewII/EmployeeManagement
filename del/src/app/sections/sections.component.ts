import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {
  sections: any[] = [];
  departments: any[] = [];
  newSection = { name: '', departmentId: null };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadSections();
    this.loadDepartments();
  }

  loadSections() {
    this.http.get('http://localhost:5000/api/sections').subscribe((response: any) => {
      this.sections = response;
    });
  }

  loadDepartments() {
    this.http.get('http://localhost:5000/api/departments').subscribe((response: any) => {
      this.departments = response;
    });
  }

  addSection() {
    this.http.post('http://localhost:5000/api/sections', this.newSection).subscribe(response => {
      this.loadSections();
      this.newSection.name = '';
      this.newSection.departmentId = null;
    });
  }

  updateSection(section: any) {
    this.http.put(`http://localhost:5000/api/sections/${section.id}`, section).subscribe(response => {
      alert('Section updated successfully');
    });
  }
}
