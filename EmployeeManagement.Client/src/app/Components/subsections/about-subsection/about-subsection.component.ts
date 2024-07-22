import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubSectionService } from '../../../services/subsection.service';
import { SectionService } from '../../../services/section.service';
import { DepartmentService } from '../../../services/department.service';

@Component({
  selector: 'app-about-subsection',
  templateUrl: './about-subsection.component.html',
  styleUrls: ['./about-subsection.component.css']
})
export class AboutSubSectionComponent implements OnInit {
  subSection: any = {};
  section: any = {};
  department: any = {};

  constructor(
    private route: ActivatedRoute,
    private subSectionService: SubSectionService,
    private sectionService: SectionService,
    private departmentService: DepartmentService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.subSectionService.getSubSection(+id).subscribe(data => {
        this.subSection = data;
        this.loadRelatedEntities(this.subSection.sectionId);
      });
    }
  }

  loadRelatedEntities(sectionId: number): void {
    this.sectionService.getSection(sectionId).subscribe(sectionData => {
      this.section = sectionData;
      this.departmentService.getDepartment(this.section.departmentId).subscribe(departmentData => {
        this.department = departmentData;
      });
    });
  }
}
