import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DepartmentComponent } from './pages/department/department.component';
import { SectionComponent } from './pages/section/section.component';
import { SubsectionComponent } from './pages/subsection/subsection.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { EditEmployeeComponent } from './pages/edit-employee/edit-employee.component';
import { AboutEmployeeComponent } from './pages/about-employee/about-employee.component';
import { AddDepartmentComponent } from './departments/add-department/add-department.component';
import { EditDepartmentComponent } from './departments/edit-department/edit-department.component';
import { AboutDepartmentComponent } from './departments/about-department/about-department.component';
import { AddSectionComponent } from './sections/add-section/add-section.component';
import { EditSectionComponent } from './sections/edit-section/edit-section.component';
import { AboutSectionComponent } from './sections/about-section/about-section.component';
import { AddSubSectionComponent } from './subsections/add-subsection/add-subsection.component';
import { EditSubSectionComponent } from './subsections/edit-subsection/edit-subsection.component';
import { AboutSubSectionComponent } from './subsections/about-subsection/about-subsection.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
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
