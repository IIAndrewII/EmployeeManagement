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
  { path: '', redirectTo: '/employees', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
