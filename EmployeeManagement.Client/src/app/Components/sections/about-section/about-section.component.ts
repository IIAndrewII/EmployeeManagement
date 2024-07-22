import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SectionService } from '../../../services/section.service';
import { DepartmentService } from '../../../services/department.service';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent implements OnInit {
  section: any = {};
  department: any = {};

  constructor(
    private route: ActivatedRoute,
    private sectionService: SectionService,
    private departmentService: DepartmentService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.sectionService.getSection(+id).subscribe(data => {
        this.section = data;
        this.loadRelatedEntity(this.section.departmentId);
      });
    }
  }

  loadRelatedEntity(departmentId: number): void {
    this.departmentService.getDepartment(departmentId).subscribe(departmentData => {
      this.department = departmentData;
    });
  }
}
