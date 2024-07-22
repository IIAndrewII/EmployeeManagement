import { Component } from '@angular/core';
import { SectionService } from '../../services/section.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.css']
})
export class AddSectionComponent {
  section: any = {};

  constructor(private sectionService: SectionService, private router: Router) {}

  addSection(): void {
    this.sectionService.addSection(this.section).subscribe(() => {
      this.router.navigate(['/sections']);
    });
  }
}
