import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SubSectionService } from '../../../services/subsection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subsection',
  templateUrl: './subsection.component.html',
  styleUrls: ['./subsection.component.css']
})
export class SubsectionComponent implements OnInit {
  subsections: any[] = [];
  filteredSubsections = new MatTableDataSource<any>();
  displayedColumns: string[] = ['name', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private subsectionService: SubSectionService, private router: Router) {}

  ngOnInit(): void {
    this.loadSubsections();
  }

  loadSubsections(): void {
    this.subsectionService.getAllSubSections().subscribe(
      data => {
        this.subsections = data;
        this.filteredSubsections.data = data;
        this.filteredSubsections.paginator = this.paginator;
      },
      error => console.error('Error fetching subsections:', error)
    );
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filteredSubsections.filter = filterValue.trim().toLowerCase();
  }

  editSubsection(subsection: any): void {
    this.router.navigate(['/edit-subsection', subsection.id]);
  }

  aboutSubsection(subsection: any): void {
    this.router.navigate(['/about-subsection', subsection.id]);
  }

  deleteSubsection(id: number): void {
    this.subsectionService.deleteSubSection(id).subscribe(() => {
      this.loadSubsections();
    });
  }

  navigateToRegister(): void {
    this.router.navigate(['/add-subsection']); 
  }
}
