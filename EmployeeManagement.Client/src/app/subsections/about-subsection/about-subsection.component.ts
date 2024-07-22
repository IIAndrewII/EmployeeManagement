import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubSectionService } from '../../services/subsection.service';

@Component({
  selector: 'app-about-subsection',
  templateUrl: './about-subsection.component.html',
  styleUrls: ['./about-subsection.component.css']
})
export class AboutSubSectionComponent implements OnInit {
  subSection: any = {};

  constructor(
    private route: ActivatedRoute,
    private subSectionService: SubSectionService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.subSectionService.getSubSection(+id).subscribe(data => {
        this.subSection = data;
      });
    }
  }
}
