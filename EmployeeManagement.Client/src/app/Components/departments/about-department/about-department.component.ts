import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from '../../../services/department.service';

@Component({
  selector: 'app-about-department',
  templateUrl: './about-department.component.html',
  styleUrls: ['./about-department.component.css']
})
export class AboutDepartmentComponent implements OnInit {
  department: any = {};

  constructor(
    private route: ActivatedRoute,
    private departmentService: DepartmentService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.departmentService.getDepartment(+id).subscribe(data => {
        this.department = data;
      });
    }
  }
}
