import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubSectionService } from '../../services/subsection.service';
import { SectionService } from '../../services/section.service';

@Component({
  selector: 'app-edit-subsection',
  templateUrl: './edit-subsection.component.html',
  styleUrls: ['./edit-subsection.component.css']
})
export class EditSubSectionComponent implements OnInit {
  subSection: any = {};
  sections: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private subSectionService: SubSectionService,
    private sectionService: SectionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.subSectionService.getSubSection(+id).subscribe(data => {
        this.subSection = data;
      });
      this.sectionService.getAllSections().subscribe(data => {
        this.sections = data;
      });
    }
  }

  updateSubSection(): void {
    this.subSectionService.updateSubSection(this.subSection).subscribe(() => {
      this.router.navigate(['/subsections']);
    });
  }
}
