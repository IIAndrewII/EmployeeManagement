import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SectionService } from '../../services/section.service';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-edit-section',
  templateUrl: './edit-section.component.html',
  styleUrls: ['./edit-section.component.css']
})
export class EditSectionComponent implements OnInit {
  section: any = {};
  departments: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private sectionService: SectionService,
    private departmentService: DepartmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.sectionService.getSection(+id).subscribe(data => {
        this.section = data;
      });
      this.departmentService.getDepartments().subscribe(data => {
        this.departments = data;
      });
    }
  }

  updateSection(): void {
    this.sectionService.updateSection(this.section).subscribe(() => {
      this.router.navigate(['/sections']);
    });
  }
}
