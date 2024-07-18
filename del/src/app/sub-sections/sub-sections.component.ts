import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sub-sections',
  templateUrl: './sub-sections.component.html',
  styleUrls: ['./sub-sections.component.css']
})
export class SubSectionsComponent implements OnInit {
  subSections: any[] = [];
  sections: any[] = [];
  newSubSection = { name: '', sectionId: null };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadSubSections();
    this.loadSections();
  }

  loadSubSections() {
    this.http.get('http://localhost:5000/api/sub-sections').subscribe((response: any) => {
      this.subSections = response;
    });
  }

  loadSections() {
    this.http.get('http://localhost:5000/api/sections').subscribe((response: any) => {
      this.sections = response;
    });
  }

  addSubSection() {
    this.http.post('http://localhost:5000/api/sub-sections', this.newSubSection).subscribe(response => {
      this.loadSubSections();
      this.newSubSection.name = '';
      this.newSubSection.sectionId = null;
    });
  }

  updateSubSection(subSection: any) {
    this.http.put(`http://localhost:5000/api/sub-sections/${subSection.id}`, subSection).subscribe(response => {
      alert('Sub-Section updated successfully');
    });
  }
}
