import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SectionService } from '../../../services/section.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  sections: any[] = [];
  filteredSections = new MatTableDataSource<any>();
  displayedColumns: string[] = ['name', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private sectionService: SectionService, private router: Router) {}

  ngOnInit(): void {
    this.loadSections();
  }

  loadSections(): void {
    this.sectionService.getAllSections().subscribe(
      data => {
        this.sections = data;
        this.filteredSections.data = data;
        this.filteredSections.paginator = this.paginator;
      },
      error => console.error('Error fetching sections:', error)
    );
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filteredSections.filter = filterValue.trim().toLowerCase();
  }

  editSection(section: any): void {
    this.router.navigate(['/edit-section', section.id]);
  }

  aboutSection(section: any): void {
    this.router.navigate(['/about-section', section.id]);
  }

  deleteSection(id: number): void {
    this.sectionService.deleteSection(id).subscribe(() => {
      this.loadSections();
    });
  }

  navigateToRegister(): void {
    this.router.navigate(['/add-section']); 
  }
}
