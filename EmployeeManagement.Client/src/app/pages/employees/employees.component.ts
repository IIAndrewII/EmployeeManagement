import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: any[] = [];
  filteredEmployees = new MatTableDataSource<any>();
  displayedColumns: string[] = ['name', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getAllEmployees().subscribe(
      data => {
        this.employees = data;
        this.filteredEmployees.data = data;
        this.filteredEmployees.paginator = this.paginator;
      },
      error => console.error('Error fetching employees:', error)
    );
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filteredEmployees.filter = filterValue.trim().toLowerCase();
  }

  editEmployee(employee: any): void {
    this.router.navigate(['/edit-employee', employee.id]);
  }

  aboutEmployee(employee: any): void {
    this.router.navigate(['/about-employee', employee.id]);
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.loadEmployees();
    });
  }

navigateToRegister(): void {
  this.router.navigate(['/register']); 
}
}