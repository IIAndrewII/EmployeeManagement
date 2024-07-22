import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './Components/auth/login/login.component';
import { RegisterComponent } from './Components/auth/register/register.component';
import { DepartmentComponent } from './Components/departments/department/department.component';
import { SectionComponent } from './Components/sections/section/section.component';
import { SubsectionComponent } from './Components/subsections/subsection/subsection.component';
import { EmployeesComponent } from './Components/employees/employees/employees.component';
import { EditEmployeeComponent } from './Components/employees/edit-employee/edit-employee.component';
import { AboutEmployeeComponent } from './Components/employees/about-employee/about-employee.component';
import { EditDepartmentComponent } from './Components/departments/edit-department/edit-department.component';
import { AddDepartmentComponent } from './Components/departments/add-department/add-department.component';
import { AboutDepartmentComponent } from './Components/departments/about-department/about-department.component';
import { AddSectionComponent } from './Components/sections/add-section/add-section.component';
import { EditSectionComponent } from './Components/sections/edit-section/edit-section.component';
import { AboutSectionComponent } from './Components/sections/about-section/about-section.component';
import { AddSubSectionComponent } from './Components/subsections/add-subsection/add-subsection.component';
import { EditSubSectionComponent } from './Components/subsections/edit-subsection/edit-subsection.component';
import { AboutSubSectionComponent } from './Components/subsections/about-subsection/about-subsection.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'departments', component: DepartmentComponent },
  { path: 'sections', component: SectionComponent },
  { path: 'subsections', component: SubsectionComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'edit-employee/:id', component: EditEmployeeComponent },
  { path: 'about-employee/:id', component: AboutEmployeeComponent },
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: 'add-department', component: AddDepartmentComponent },
  { path: 'edit-department/:id', component: EditDepartmentComponent },
  { path: 'about-department/:id', component: AboutDepartmentComponent },
  { path: 'add-section', component: AddSectionComponent },
  { path: 'edit-section/:id', component: EditSectionComponent },
  { path: 'about-section/:id', component: AboutSectionComponent },
  { path: 'add-subsection', component: AddSubSectionComponent },
  { path: 'edit-subsection/:id', component: EditSubSectionComponent },
  { path: 'about-subsection/:id', component: AboutSubSectionComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
