import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DepartmentService } from '../../services/department.service';
import { Department } from '../../models/department.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  departments: Department[] = [];
  filteredDepartments = new MatTableDataSource<Department>();
  displayedColumns: string[] = ['name', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private departmentService: DepartmentService, private router: Router) { }

  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments(): void {
    this.departmentService.getDepartments().subscribe(
      (data: Department[]) => {
        this.departments = data;
        this.filteredDepartments.data = data;
        this.filteredDepartments.paginator = this.paginator;
      },
      error => {
        console.error('Error fetching departments', error);
      }
    );
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filteredDepartments.filter = filterValue.trim().toLowerCase();
  }

  editDepartment(department: any): void {
    this.router.navigate(['/edit-department', department.id]);
  }

  aboutdepartment(department: any): void {
    this.router.navigate(['/about-department', department.id]);
  }

  adddepartment(department: any): void {
    this.router.navigate(['/add-department', department.id]);
  }

  deleteDepartment(id: number): void {
    this.departmentService.deleteDepartment(id).subscribe(() => {
      this.loadDepartments();
    });
  }

  navigateToRegister(): void {
    this.router.navigate(['/add-department']); 
  }
}
