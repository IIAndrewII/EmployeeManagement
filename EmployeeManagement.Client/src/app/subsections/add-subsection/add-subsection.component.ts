import { Component } from '@angular/core';
import { SubSectionService } from '../../services/subsection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-subsection',
  templateUrl: './add-subsection.component.html',
  styleUrls: ['./add-subsection.component.css']
})
export class AddSubSectionComponent {
  subSection: any = {};

  constructor(private subSectionService: SubSectionService, private router: Router) {}

  addSubSection(): void {
    this.subSectionService.addSubSection(this.subSection).subscribe(() => {
      this.router.navigate(['/subsections']);
    });
  }
}
