import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-about-employee',
  templateUrl: './about-employee.component.html',
  styleUrls: ['./about-employee.component.css']
})
export class AboutEmployeeComponent implements OnInit {
  employee: any = {};

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.employeeService.getEmployee(+id).subscribe(data => {
        this.employee = data;
      });
    }
  }
}
