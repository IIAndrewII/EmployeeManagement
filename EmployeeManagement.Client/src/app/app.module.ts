import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/auth/login/login.component';
import { RegisterComponent } from './Components/auth/register/register.component';
import { DepartmentComponent } from './Components/departments/department/department.component';
import { SectionComponent } from './Components/sections/section/section.component';
import { SubsectionComponent } from './Components/subsections/subsection/subsection.component';
import { ToolbarComponent } from './Components/shared/toolbar/toolbar.component';
import { EmployeesComponent } from './Components/employees/employees/employees.component';
import { EditEmployeeComponent } from './Components/employees/edit-employee/edit-employee.component';
import { AboutEmployeeComponent } from './Components/employees/about-employee/about-employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { EditDepartmentComponent } from './Components/departments/edit-department/edit-department.component';
import { AddDepartmentComponent } from './Components/departments/add-department/add-department.component';
import { AddSectionComponent } from './Components/sections/add-section/add-section.component';
import { EditSectionComponent } from './Components/sections/edit-section/edit-section.component';
import { AboutSectionComponent } from './Components/sections/about-section/about-section.component';
import { AddSubSectionComponent } from './Components/subsections/add-subsection/add-subsection.component';
import { EditSubSectionComponent } from './Components/subsections/edit-subsection/edit-subsection.component';
import { AboutSubSectionComponent } from './Components/subsections/about-subsection/about-subsection.component';

@NgModule({
  declarations: [
    AddSectionComponent,
    EditSectionComponent,
    AboutSectionComponent,
    AddSubSectionComponent,
    EditSubSectionComponent,
    AboutSubSectionComponent,
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DepartmentComponent,
    SectionComponent,
    SubsectionComponent,
    ToolbarComponent,
    EmployeesComponent,
    EditEmployeeComponent,
    EditDepartmentComponent,
    DepartmentComponent,
    AboutEmployeeComponent,
    AddDepartmentComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,

    MatButtonModule,
    BrowserAnimationsModule




    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
