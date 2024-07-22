import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SubSectionService } from '../../../services/subsection.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employee: any = {};
  subSections: any[] = [];


  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router,
    private subSectionService: SubSectionService,

  ) {}

  ngOnInit(): void {
    this.loadSubSections();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.employeeService.getEmployee(+id).subscribe(data => {
        this.employee = data;
      });
    }
  }
  loadSubSections(): void {
    this.subSectionService.getAllSubSections().subscribe(data => {
      this.subSections = data;
    });
  }

  updateEmployee(): void {
    this.employeeService.updateEmployee(this.employee).subscribe(() => {
      this.router.navigate(['/employees']);
    });
  }
}
