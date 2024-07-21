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
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DepartmentComponent } from './pages/department/department.component';
import { SectionComponent } from './pages/section/section.component';
import { SubsectionComponent } from './pages/subsection/subsection.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { EditEmployeeComponent } from './pages/edit-employee/edit-employee.component';
import { AboutEmployeeComponent } from './pages/about-employee/about-employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; // For ngModel
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DepartmentComponent,
    SectionComponent,
    SubsectionComponent,
    ToolbarComponent,
    EmployeesComponent,
    EditEmployeeComponent,
    AboutEmployeeComponent,
  
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
