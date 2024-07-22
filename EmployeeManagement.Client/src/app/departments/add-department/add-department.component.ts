import { Component } from '@angular/core';
import { DepartmentService } from '../../services/department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent {
  department: any = {};

  constructor(private departmentService: DepartmentService, private router: Router) {}

  addDepartment(): void {
    this.departmentService.addDepartment(this.department).subscribe(() => {
      this.router.navigate(['/departments']);
    });
  }
}
