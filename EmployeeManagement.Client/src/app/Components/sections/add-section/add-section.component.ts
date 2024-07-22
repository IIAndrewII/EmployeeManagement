import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SectionService } from '../../../services/section.service';
import { DepartmentService } from '../../../services/department.service';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.css']
})
export class AddSectionComponent implements OnInit {
  section: any = {};
  departments: any[] = [];

  constructor(
    private sectionService: SectionService,
    private departmentService: DepartmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe(data => {
      this.departments = data;
    });
  }

  addSection(): void {
    this.sectionService.addSection(this.section).subscribe(() => {
      this.router.navigate(['/sections']);
    });
  }
}
