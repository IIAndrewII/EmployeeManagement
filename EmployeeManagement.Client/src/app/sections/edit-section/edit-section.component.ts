import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SectionService } from '../../services/section.service';

@Component({
  selector: 'app-edit-section',
  templateUrl: './edit-section.component.html',
  styleUrls: ['./edit-section.component.css']
})
export class EditSectionComponent implements OnInit {
  section: any = {};

  constructor(
    private route: ActivatedRoute,
    private sectionService: SectionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.sectionService.getSection(+id).subscribe(data => {
        this.section = data;
      });
    }
  }

  updateSection(): void {
    this.sectionService.updateSection(this.section).subscribe(() => {
      this.router.navigate(['/sections']);
    });
  }
}
