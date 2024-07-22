import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';
import { SubSectionService } from '../../../services/subsection.service';
import { SectionService } from '../../../services/section.service';
import { DepartmentService } from '../../../services/department.service';

@Component({
  selector: 'app-about-employee',
  templateUrl: './about-employee.component.html',
  styleUrls: ['./about-employee.component.css']
})
export class AboutEmployeeComponent implements OnInit {
  employee: any = {};
  subSectionName: string = '';
  sectionName: string = '';
  departmentName: string = '';

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private subSectionService: SubSectionService,
    private sectionService: SectionService,
    private departmentService: DepartmentService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.employeeService.getEmployee(+id).subscribe(data => {
        this.employee = data;
        this.loadRelatedNames();
      });
    }
  }

  loadRelatedNames(): void {
    if (this.employee.subSectionId) {
      this.subSectionService.getSubSection(this.employee.subSectionId).subscribe(data => {
        this.subSectionName = data.name;
      });
    }
    if (this.employee.sectionId) {
      this.sectionService.getSection(this.employee.sectionId).subscribe(data => {
        this.sectionName = data.name;
      });
    }
    if (this.employee.departmentId) {
      this.departmentService.getDepartment(this.employee.departmentId).subscribe(data => {
        this.departmentName = data.name;
      });
    }
  }
}
